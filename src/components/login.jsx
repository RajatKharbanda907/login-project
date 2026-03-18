import React, { useState } from 'react'
import api from "../../api"
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email,setemail]= useState("");
  const [password,setpassword]= useState("");
  const [success,setsuccess]=useState(false);
  const [loading,setloading]= useState(false);
  const [failure,setfailure] =useState(false);
  
  const navigate= useNavigate();
  
 const onlogin = async(e)=>{
  try{
    e.preventDefault();
    setloading(true);
    const response = await api.post("/api/user/login",{email:email,password:password});
    if(response.data.success=true){
     
      setsuccess(true);
      setTimeout(() => {
        navigate("/logout")
      }, 0);
      setloading(false)
      
    }else{
     setloading(false)
     setfailure(true);
     

    }
  }catch(err){
    console.log(err);
  }
 }
 
  return (
    <>
    <div className='row  outer container' >
        <div className='col inner1' ><h1>Login</h1></div>
        <div className='col inner2'>
          <form onSubmit={onlogin}>
            <p>Email</p>
            <input type="email" onChange={(e)=>(setemail(e.target.value))} placeholder='enter your registered email' style={{width:"400px"}}></input>
            <br></br>
            <br></br>
            <p>Password</p>
            <input type='password' onChange={(e)=>(setpassword(e.target.value))} placeholder='enter your password' style={{width:"400px"}}></input>
            <br></br>
           <br></br>
            <button type="submit" className='btn btn-primary'>Login</button>
          </form>
          {loading && <span className='spinner-border'></span>}
          {success && <p className='alert alert-success'>Successfully login</p>}
          {failure && <p className='alert alert-danger'>You are not registered</p>}


        </div>
    </div>
    </>
    
  )
}

export default Login;