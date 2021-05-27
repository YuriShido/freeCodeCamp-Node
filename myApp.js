var express = require('express');
var app = express();

console.log("Hello World")

// app.get('/', function(req, res) {
//   res.send("Hello Express")
// })



app.use("/public",express.static(__dirname + "/views/index.html"))


app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});































 module.exports = app;
