const express = require('express');
const app = express()
app.get('/', function(req, res){
  res.render('index');
});

app.post('/additem', function (req, res) {
  res.render('index')
});

app.listen(8080, function () {
  console.log('Running on port 8080!')
});

app.set('view engine', 'ejs');
