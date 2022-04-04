const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs');
const mysql = require('mysql');

app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static('./public'));

//View_zone

//Route_zone
var level = require('./routes/level.js');
app.use('/', level);

var stat = require('./routes/stat.js');
app.use('/', stat);


app.listen(app.get('port'), () => {
	console.log('Server Started~!!')
});
