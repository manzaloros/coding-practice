let mysql = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);

// Insert statement
let sql = `INSERT INTO todos(title,completed)
           VALUES('Learn how to insert a new row',true)`;

// Execute insert statement
connection.query(sql);
connection.end();