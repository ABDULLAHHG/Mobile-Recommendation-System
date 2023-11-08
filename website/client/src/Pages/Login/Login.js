import React, { useState } from "react";
import './Login.css'
import axios from 'axios'

export function Login() {
    // init the 
    const [formErrors , setFormErrors] = useState({});
    const [isSubmit , setIsSubmit] = useState(false);
    const [user , setUserDetails] = useState({
      
      userEmail : "",
      userPassword : "",
    });
    
    const changeHandler = (e) => {
      const {name , value} = e.target;
      setUserDetails({
        ...user,
        [name] : value
      });
    }


    
    const register_sent = () => {
      fetch('/Register' , {
        method:['POST'],
        headers:{
          'Content-Type' :'application/json'
        },
        body:JSON.stringify({'userEmail' : user.userEmail,
                             'userPassword' : user.userPassword})
      }).then({
        
      })
    }
  
    return (

    <div>
      <div className="Login-app-container">
        <div className="Login-mid-container">
          <div className="Login">
                <h1>Login</h1>
                <h3 id = 'formleft'>Please Enter Details</h3>
            
                <input 
                  id = 'email'
                  name = 'email'
                  type = 'text'
                  placeholder='Enter your email'
                  value = {user.userEmail}
                  onChange={changeHandler}
                  />
                            
                <input 
                  id = 'password'
                  name = 'password'
                  type = 'password'
                  placeholder='Enter your password'
                  value = {user.userPassword}
                  onChange={changeHandler}
                  />
                  <button type="submit" onClick={register_sent}>Login</button>
                  <p>Havent Registered <a href="/Register">yet</a> ? </p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  export default Login;