const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
var url = require('url');
const mongoClient = require('mongodb').MongoClient
const app = express()
app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'))

var db;
var databaseUrl = 'mongodb://13.125.8.3:27017/'

app.get('/', (req, res) => {
	res.send('Web Server Started~!!')
});

app.get('/emp', (req, res) => {
	mongoClient.connect(databaseUrl, function(err, database){
		if(err != null){
			res.json({'count':0})
		}else{
			db = database.db('test')
			db.collection('emp').find({}).toArray(function(err, result){
				if(err) throw err
				console.log('result : ')
				console.log(result)
				res.json(JSON.stringify(result))
			})
		}
	})
});





var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;//query string 추출
    var title = queryData.id;
    console.log(title);
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    var template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a></p>
      <p><img src="https://images.squarespace-cdn.com/content/v1/5c72d811d74562103adbe24c/1555785231144-9RV7LO1ER3IZ2MZN365T/code.JPG" height="60%" width="60%"></p>
      <p style="margin-top:20px;">HTML elements are the building blocks of HTML pages.</p>
    </body>
    </html>

   `;
    response.end(template);

});

app.listen(3000, function () {
  console.log('3000 Port : 서버 실행 중');
});
