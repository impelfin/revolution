const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();

// view engine setup
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes setup
var leaflet = require('./routes/leaflet.js');
app.use('/', leaflet);

app.listen(app.get('port'), () =>{
	console.log('3000 Port : 서버 실행 중')
});
