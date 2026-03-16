const user = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async (req,res)=>{
    try{
    const {name,email,password}= req.body
    if(!name || !email || !password){
        return res.status(400).json({
            success:false,
            message:"all field Required"
        })
    }
    const existuser = await user.findOne({email:email})
    if(existuser){
        return res.status(400).json({
            success:false,
            message:"user already exist"
        })
    }
   const salt = await  bcrypt.genSalt()
   const hashedpassword = await bcrypt.hash(password,salt);
    const newuser =  await user.create({
        name,
        email,
        password:hashedpassword
    })
   
    const token = jwt.sign({id:newuser._id,email:newuser.email},process.env.SECRET_KEY,{expiresIn:"2d"});
    
    res.cookie("token",token,{
        httpOnly:true,
        secure:false
        

    })
    newuser.password=undefined
    res.status(200).json({
        success:true,
        message:"user created successfully",
        data: newuser
    })
    
}catch(err){
    res.status(400).json({
        success:false,
        error:err,
        message:"something went wrong"
    })
}
}

const login = async (req,res)=>{
    try{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"all field required",
        })

    }
    const existuser = await user.findOne({email:email});

    if(!existuser){
        return res.status(400).json({
            message:"user not registed",
            success:false
        })
    }
    const isMAtch = await bcrypt.compare(password,existuser.password)

    if(!isMAtch){
        return res.status(400).json({
            success:false,
            message:"password is wrong"
        })
    }

    const token = jwt.sign({_id:existuser._id,email:existuser.email},process.env.SECRET_KEY,{expiresIn:"2d"});
    
    res.cookie("token",token,{
        httpOnly:true,
        secure:false
    })
    existuser.password=undefined
    res.status(200).json({
        success:true,
        message:"user login successfully",
        data: existuser
    })
}catch(err){
    res.status(400).json({
        success:false,
        message:"something went wrong"
    })
}
}


const logout =(req,res)=>{
    try{
    res.cookie("token","",{httpOnly:true,secure:false,expires: new Date(0)});
    res.status(200).json({
        success:true,
        message:"logout successfully"
    })
}catch(err){
 res.status(400).json({
    success:false,
    message:"error occured",
    error:err
 })
}
}

const profile = (req,res)=>{
    try{
        res.status(200).json({
        message:`hi ${req.user.email}`
    })
} catch(err){
    res.status(400).json({
        success:false,
        message:"error occured"+err,
        data : req.user
    })
}
    
}






module.exports=  {register,login,logout,profile}