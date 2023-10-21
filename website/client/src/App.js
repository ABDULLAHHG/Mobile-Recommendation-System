import React, { useState } from "react";
import {Header , Container , Hero } from './components/index'
import {Home , Login , Register} from './Pages/index'
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
      
  })}

  return (
    <div> 
    <div>
    <div>
      <Router>
        <Header/>
        <Container>
          <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
          </Routes>
        </Container>
      </Router>
    </div>
  </div>
  </div>
  );
}

export default App;
