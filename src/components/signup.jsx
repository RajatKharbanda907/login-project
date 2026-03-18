import React, { useState } from 'react'
import api from '../../api'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate();
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]= useState("")
  const [success,setsuccess]= useState(false)
  const [loading,setloading] =useState(false)
  const [butshow,setbutshow] = useState(false)
  const [failure,setfalure]=useState(false)

const onsignup= async (e)=>
  {
  e.preventDefault();
  try{


  setloading(true)
   const response =  await api.post("/api/user/register",{
    name:name,
    email:email,
    password:password

   })
   console.log(response)
   if(response.data.success==true){ 
    setsuccess(true)
    setloading(false)
    setbutshow(true)
    
   }else{
    setloading(false)
    setfalure(true)
   }
  }catch(err){
    console.log(err);
  }
}

const onprofile= async (e)=>{
   e.preventDefault();
try{
setloading(true)
const response = await api.get("/api/user/profile");
if(response.data.success==true){
  setTimeout(() => {
     
     navigate("/logout")
     setloading(false)
  }, 5000);
 
}else{
 setfalure(true)
 setloading(false)
}
}catch(err){
  console.log(err);
}
}

  return (
    <>
     <div className='container outer row' >
     <div className='col inner11'><h1>Signup</h1></div>
     <div className='col inner2'>
       <form id="af" onSubmit={onsignup}>
            <p>Name</p>
            <input type="text" value={name} onChange={(e)=>(setname(e.target.value))} placeholder='enter your name' style={{width:"400px"}}></input>
            <br></br>
            <br></br>
            <p>Email</p>
            <input type='email' value={email} onChange={(e)=>(setemail(e.target.value))}  placeholder='enter your email' style={{width:"400px"}}></input>
            <br></br>
           <br></br>
            <p>password</p>
            <input type='password' value={password} onChange={(e)=>(setpassword(e.target.value))} placeholder='enter your password' style={{width:"400px"}}></input>
            <br></br>
           <br></br>
            <button type='submit' className='btn btn-primary'>Signup</button>
          </form>
          
          {success && <p className='alert alert-success'>successfully registered</p>}
          {failure && <p className='alert alert-danger'>failed to registered</p>}
          {loading && <span className='spinner-border'></span>}
          {butshow && <button  onClick={onprofile} className='btn btn-primary'>Open Profile</button>}
         
     </div>
     </div>
    </>
   
  )
}

export default Signup