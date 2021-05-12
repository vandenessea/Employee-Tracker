const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 8008,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: '1234',
    database: 'employee_trackDB',
  });
  






















