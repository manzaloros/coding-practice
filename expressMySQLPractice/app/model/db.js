'use strict';

var mysql = require('mysql');

// Local db connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'practiceDatabase'
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;