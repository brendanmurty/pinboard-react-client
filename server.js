const express = require('express');
const path = require('path');
const app = express();
const app_domain = process.env.REACT_APP_DOMAIN || 'localhost';
const app_port = process.env.REACT_APP_PORT || 80;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(app_port, app_domain);
