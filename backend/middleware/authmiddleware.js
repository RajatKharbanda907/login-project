const jwt = require("jsonwebtoken")
const user = require("../models/user")
const authmiddleware= async(req,res,next)=>{
    try{
    const token = req.cookies.token
   if(!token){
   return res.status(400).json({
    success:false,
    message:"unauthorized"
   })
}
  const decoded = jwt.verify(token,process.env.SECRET_KEY)
   
    req.user  = await user.findById(decoded._id)
  
    
  next()


   
}catch(err){
    res.status(400).json({
        success:false,
        message:"something went wrong"
    })
}
}
module.exports=authmiddleware;