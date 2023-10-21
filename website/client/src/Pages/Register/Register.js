import React, { useState } from "react";
import './Register.css';

function Register() {
  const [userEmail , setUserEmail] = useState("")
  const [userPassword , setUserPassword] = useState("")
  const [userName , setUserName] = useState("")

    
  const register_sent = () => {
    fetch('/Register' , {
      method:['POST'],
      headers:{
        'Content-Type' :'application/json'
      },
      body:JSON.stringify({'userEmail' : userEmail,
                           'userPassword' : userPassword})
    }).then({
      
    })
  }

  return (
  <div>
    <div className="app-container">
      <div className="mid-container">
        <div className="Register">
              <h1>Register</h1>
              <h3 id = 'formleft'>Please Enter Details</h3>
          
              <input 
                type = 'text'
                placeholder='Enter your Name'
                value = {userName}
                onChange={(e) => setUserName(e.target.value)}
                />
            
              <input 
                type = 'text'
                placeholder='Enter your Email'
                value = {userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                />
                
              <input 
                type = 'password'
                placeholder='Enter your password'
                value = {userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                />
            
            <input 
                type = 'password'
                placeholder='Enter your password'
                value = {userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                />
            
                <button type="submit" onClick={register_sent}>Login</button>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Register;
