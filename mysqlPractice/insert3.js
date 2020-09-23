let mysql = require('mysql');
let config = require('./config.js');

let connection = mysql.createConnection(config);

// Insert statement
let stmt = `INSERT INTO todos(title,completed) VALUES ? `;
let todos = [
  ['Insert multiple rows at a time', false],
  ['It should work perfectly', true]
];

// Execute. Puts `todos` in an array? Like an array of array of arrays?
connection.query(stmt, [todos], (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  // Get inserted rows
  console.log('Row inserted:' + results.affectedRows);
});

connection.end();
