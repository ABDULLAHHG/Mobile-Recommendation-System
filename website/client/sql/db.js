// const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 3001;

// // Connet to mysql 
// const con = mysql.createConnection({
//      host:"127.0.0.1" ,
//      user:"root" ,
//      database:"Users" ,
//      password:"aboud"
//  })



app.post('/Register', (req , res) => {
  // Access form data

  // User Data 
  const userEmail = req.body.userEmail;
  const userPassword = req.body.userPassword;
  const userName = req.body.userName
  const userAddress = req.body.userAdress
  
  console.log(req.body)  
  // console.log(email)
  // Process the form data as needed
  // ...

  // Send a response back to the client
  res.json({ message: 'Form submitted successfully' });
});



app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// var sql = "INSERT INTO user-registration (full_name , email , password_hash,date_of_brith , address , phone_number) VALUES ?"

// var values = [userName , userEmail , userPassword , ? , userAdress]
// // con.connect(function(err) {
// //   if (err) throw err;
// //   console.log("Connected!");
// // });
