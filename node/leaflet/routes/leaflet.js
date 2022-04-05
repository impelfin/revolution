const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// simple api
app.get('/', function(req, res) {
  res.render('index', {
  	title: 'leaflet'
  });
});

module.exports = app;
