const express = require('express');
const app = express()
const bodyParser = require("body-parser");
let groceryItems = ["milk", "breadcrumbs", "a fancy fish"]

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

let gottenItems = 
app.post("/removeItem", function(req, res) {
  let gotItem = req.body.check;
if (typeof gotItem === "string") {
  gottenItems.push(gotItem);
groceryItems.splice(groceryItems.indexOf(gotItem), 1);
} else if (typeof gotItem === "object") {
  for (let i = 0; i < gotItem.length; i++) { 
    gottenItems.push(gotItem[i]);
    groceryItems.splice(groceryItems.indexOf(gotItem[i]), 1);
  }
}
});

app.set('view engine', 'ejs');
