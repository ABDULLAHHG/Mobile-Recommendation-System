import './App.css';
import {Navbar} from './components/navbar'
import React, { useState } from "react";

function App() {
  const [isChatbotVisible , setIsChabotVisible] = useState(false);
  const [userEmail , setUserEmail] = useState("")
  const [userPassowrd , setUserPassowrd] = useState("")
  
  const handleOpenChatbot = () => {
    setIsChabotVisible(true);
  };

  const handleCloseChatbot = () => {
    setIsChabotVisible(false);
  };
  
  return (
  <div>
    <Navbar/>
    <div className="app-container">
      <div className="left-container">
        <div className="about-chatbot">
            <form>
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
                value = {userPassowrd}
                onChange={(e) => setUserPassowrd(e.target.value)}
                />
                <button type="submit">Login</button>
          </form>           
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
