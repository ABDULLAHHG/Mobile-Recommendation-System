import './App.css';
import {navbar} from './components/navbar'
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
   
    <div className="app-container">
      <div className="left-container">
        <div className="about-chatbot">
           <form>
            <h1>Login</h1>
          
          {/* <i>
            <br/><br></br>
            Hit clear button to clear chats.
            <br />
            Click Here To{" "}
            <a href="https://docs.google.com/document/d/1eoVq-6oOpIMmheI0IgRy-Ty8FYTkKH1j/edit?usp=sharing&ouid=102388778311955000420&rtpof=true&sd=true">
              learn More
            </a>
          </i>
          <button onClick={handleCloseChatbot}>Cloes Chatbot</button> */}
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
 
  );
}

export default App;
