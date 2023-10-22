// const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 3001;

// Connet to mysql 
// const con = mysql.createConnection({
//     host:"127.0.0.1" ,
//     user:"root" ,
//     database:"Users" ,
//     password:"aboud"
// })



app.post('/Register', (req , res) => {
  // Access form data
  console.log('Hi')
  console.log(req.body)
  // const email = req.body.userEmail;
  // const password = req.body.userPassword;

  // console.log(email)
  // Process the form data as needed
  // ...

  // Send a response back to the client
  res.json({ message: 'Form submitted successfully' });
});



app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
