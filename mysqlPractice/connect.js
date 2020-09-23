let mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todoapp'
});

// Connect to MySQL server
connection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  let createTodos = `create table if not exists todos(
                      id int primary key auto_increment,
                      title varchar(255)not null,
                      completed tinyint(1) not null default 0
                      )`;
  connection.query(createTodos, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  })
})

connection.end(function (err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
});