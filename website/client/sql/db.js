const mysql = require("mysql");

const pool = mysql.createPool({
    host:"127.0.0.1" ,
    user:"root" ,
    database:"Users" ,
    password:"aboud"
})

console.log(pool)
module.export = pool.promise();
