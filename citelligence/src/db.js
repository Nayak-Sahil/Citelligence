const mysql = require('mysql2');

try{
  module.exports = mysql.createPool({
    host: 'localhost',        
    user: 'root',             
    password: '',     
    database: 'citelligence' 
  });
}catch(error){
  throw Error("Internal Server Error!");
}

