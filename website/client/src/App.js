import './App.css';
import React, { useState } from "react";
import {Header , Container , Hero} from './components/index'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'

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
      <Router>
        <Header/>
        <Container>
        <Hero/>
        </Container>
      </Router>
    </div>
  </div>
  
  );
}

export default App;
