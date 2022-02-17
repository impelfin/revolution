const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// simple api
app.get("/Hello", (req, res) => {
  res.send("Hello World!!");
});

// post, request body, response O
app.post("/postplain", (req, res) => {
  console.log(req.body);
  res.json(req.body);
})

module.exports = app;
