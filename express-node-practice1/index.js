const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  // Checking comment
  res.send('Hello world!');
});

app.get('/', (req, res) => {
  // Checking comments
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
