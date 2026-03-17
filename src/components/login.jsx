import React from 'react'

function Login() {
  return (
    <>
    <div className='row  outer container' >
        <div className='col inner1' ><h1>Login</h1></div>
        <div className='col inner2'>
          <form>
            <p>Email</p>
            <input type="email" placeholder='enter your registered email' style={{width:"400px"}}></input>
            <br></br>
            <br></br>
            <p>Password</p>
            <input type='password' placeholder='enter your password' style={{width:"400px"}}></input>
            <br></br>
           <br></br>
            <button className='btn btn-primary'>Login</button>
          </form>

        </div>
    </div>
    </>
    
  )
}

export default Login;