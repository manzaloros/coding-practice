let mysql = require('mysql');
let config = require('./config');

let connection = mysql.createConnection(config);

let sql = `DELETE FROM todos WHERE id = ? `;

connection.query(sql, 1, (error, results, fields) => {
  if (error) {
    console.error(error.message);
  }
  console.log('Deleted row(s):', + results.affectedRows);
});

connection.end();