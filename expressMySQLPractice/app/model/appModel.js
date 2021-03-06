'use strict';
var sql = require('mysql');

// Task object constructor
var Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
}
Task.createTask = function (newTask, result) {
  sql.query('INSERT INTO tasks set ?', newTask, function (err, res) {
    if (err) {
      console.error(err.message);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Task.getTaskById = function (taskId, result) {
  sql.query('SELECT task FROM tasks WHERE id = ?', taskId, function (err, res) {
    if (err) {
      console.error(err.message);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.getAllTask = function (result) {
  console.log("from get all tasks")
  sql.query('SELECT * FROM tasks', function (err, res) {
    if (err) {
      console.error(err.message);
      result(null, err);
    } else {
      console.log('tasks: ', res);
    }
  });
};

Task.updateById = function (id, task, result) {
  sql.query('UPDATE tasks SET task = ? WHERE id = ?', [task.task, id], function (err, res) {
    if (err) {
      console.error(err.message);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Task.remove = function (id, result) {
  sql.query('DELETE FROM tasks WHERE id = ?', [id], function (err, res) {
    if (err) {
      console.error(err.message);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Task;