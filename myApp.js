var express = require('express');
var bodyParser = require('body-parser')

var app = express();

// console.log("Hello World")

// app.get('/', function(req, res) {
//   res.send("Hello Express")
// })
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/public",express.static(__dirname + "/views/index.html"))



app.use((req, res, next) => {
  let string = req.method + " " + req.path + " - " + req.ip;
  console.log(string)
  next()
})

app.get('/now', (req, res, next) => {
  req.time = new Date().toString()
  next()
}, (req,res) => {
  res.send({
    time: req.time
  })
}
)



app.get("/json", (req, res) => {
  if(process.env.MESSAGE_STYLE === "uppercase") {
  res.json({
    message: "Hello json".toUpperCase()
  });

  } else {
    res.json({
      message: "Hello json"
    })
  }
  
});


app.get("/:word/echo", (req, res, next) => {
  console.log("params", req.params)
  let word = req.params.word
  res.json({
    echo: word
  })
 
})

app.post('/name', (req, res) => {
  console.log("body", req.body)
  let string = req.body.first + " " + req.body.last
  res.json({
    name: string
  })
})

// app.get("/name", (req, res, next) => {
//   console.log("query", req.query)
//   let firstName = req.query.first
//   let lastName = req.query.last
//   res.json({
//     name: `${firstName} ${lastName}`
//   })
// })



























 module.exports = app;
