var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

require('./server/routers/msg.router')(app);

app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function() {
  console.log('server is listening on port 3000');
});


