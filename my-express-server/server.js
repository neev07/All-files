
const express = require('express');

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello World!!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact Me At: +91 7897190572");
});

app.get("/about", function(req, res){
  res.send("Hi! This is Neev and I love cooking and programming.")
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Cooking</li><li>Programming</li><li>Eating</li></ul>");
});

app.listen(3000, function(){
  console.log("The server has started on port: 3000");
});
