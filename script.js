const express = require('express');
const app = express();
const fs = require('fs');
const docker = fs.readFileSync('./index.html', 'utf8');

app.get('/', function(req, res) {
  res.send(docker);
});
const server = require('http').Server(app);
const port = 3000;

server.listen(port, function() {
  console.log(`listening on port ${port}`);
});