import React, { useState } from "react";
import  {Header} from '../Header/Header';


function App() {
    const [userEmail , setUserEmail] = useState("")
    const [userPassword , setUserPassword] = useState("")
      
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
      <div>
       <Header/>
      </div>
      <div className="app-container">
        <div className="mid-container">
          <div className="about-chatbot">
                <h1>Login</h1>
                <h3 id = 'formleft'>Please Enter Details</h3>
            
                <input 
                  type = 'text'
                  placeholder='Enter your email'
                  value = {userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
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
  
  export default App;