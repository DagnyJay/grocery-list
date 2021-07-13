const express = require('express');
const app = express()
const bodyParser = require("body-parser");
let groceryItems = ["milk", "breadcrumbs", "a fancy fish"]

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}))

app.post('/additem', function (req, res) {
  let newItem = req.body.newItem;
  groceryItems.push(newItem);
  res.redirect('/');
});

app.get('/', function(req, res){
  res.render('index', {groceryItems: groceryItems});
});

app.listen(8080, function () {
  console.log('Running on port 8080!')
});

app.set('view engine', 'ejs');
