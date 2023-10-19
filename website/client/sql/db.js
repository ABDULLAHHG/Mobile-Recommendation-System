const mysql = require('mysql');
const ex = require("express");
const con = mysql.createConnection({
    host:"127.0.0.1" ,
    user:"root" ,
    database:"Users" ,
    password:"aboud"
})

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
