let mysql = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);

let stmt = `INSERT INTO todos(title,completed)
            VALUES(?,?)`;
let todo = ['Insert a new row with placeholders', false];

// Execute the insert statement
connection.query(stmt, todo, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  // Get inserted id
  console.log('Todo Id: ' + results.insertId);
})

connection.end();