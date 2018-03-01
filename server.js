var express = require('express');
var app = express();
var path = require('path');

app.use("public",express.static(path.join(__dirname, "public")));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'public/views/index.html'));
});

// add other routes below
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname + 'views/about.html'));
});

app.listen(process.env.PORT || 8080);