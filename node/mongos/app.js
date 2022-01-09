const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000)

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mongoose configuration
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');

var mongo = require('./routes/mongo.js');
app.use('/', mongo);

var input = require('./mongoose.html');
app.use('/input', input)

app.listen(app.get('port'), () =>{
	console.log('서버 실행 중')
});
