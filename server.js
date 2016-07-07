var express = require('express');
var app = express();

var mod1 = require('./modules/Mod1.js');
var mod2 = require('./modules/Mod2.js');
var mod3 = require('./modules/Mod3.js');

var min = 10;
var max = 100;

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile('index.html');
});

app.get('/balance', function (request, response){
  min = Number(request.query.min);
  max = Number(request.query.max);
  console.log(min);
  response.send({text: mod3.text(), balance: mod3.balance(min, max)});
})

app.listen(3000, function () {
  console.log('Server start, listening on port 3000.');
});
