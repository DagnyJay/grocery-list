const express = require('express');
const app = express()
const bodyParser = require("body-parser");
const item = ["milk", "breadcrumbs", "a fancy fish"]

app.use(express.urlencoded({ extended: true}))

app.post('/additem', function (req, res) {
  let newItem = req.body.newItem;
  item.push(newItem);
  res.redirect('/');
});

app.get('/', function(req, res){
  res.render('index', {item: item, gotten: gotten});
});

app.listen(8080, function () {
  console.log('Running on port 8080!')
});

app.set('view engine', 'ejs');
