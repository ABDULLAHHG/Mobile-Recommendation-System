import './App.css';
import React, { useState } from "react";
import {Header , Container , Hero} from './components/index'

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
      <Container>

      </Container>

    </div>
  </div>
  
  );
}

export default App;
