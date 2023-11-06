const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());
const port = 3001;

// Connet to mysql 
const con = mysql.createConnection({
      host:"127.0.0.1" ,
      user:"root" ,
      database:"Users" ,
      password:"aboud"
  })



app.post('/Register', (req , res) => {
  // Access form data

  // User Data 
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  const userFullName = req.body.fullName
  const userLastName = req.body.lastName
  const userAddress = req.body.address
  const userDate = req.body.date;
  const phone_number = req.body.phone;
  
  console.log(req.body)  

  
  // console.log(email)
  // Process the form data as needed
  // ...

  // Send a response back to the client
  res.json({ message: 'Form submitted successfully' });


  // Create UserName (userFullName + userLastName)
  userName = userFullName + " " + userLastName 


  const hash = crypto.createHash('sha256');
  hash.update(userPassword)
  const password = hash.digest('hex');
  var sql = `INSERT INTO user-registration (full_name , email , password_hash,date_of_brith , address , phone_number) VALUES (${userName} , ${userEmail} , ${password} , ${userDate} , ${userAddress} , ${phone_number})`

  var values = 
  con.connect(function(err) {
    
con.query(sql,[values] , function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
 if (err) throw err;
     console.log("Connected!");
     });
  

});




app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

