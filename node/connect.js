var fs = require('fs');
var express = require('express')
var app = express()

app.get('/', function(request, response) {
	fs.readFile('index.html', function (error, data) {
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.end(data);
		console.log('메인페이지');
    });
});

var MongoClient = require('mongodb').MongoClient;
var database;

function connectDB() {
	var databaseUrl = 'mongodb://13.125.8.3:27017/DB';
	MongoClient.connect(databaseUrl, function(err, db) {
		if (err) throw err;
		console.log('데이터베이스에 연결되었습니다. : ' + databaseUrl);
		database = db;
		database = db.db('test');
	});
}

app.listen(80, function() {
  console.log('Example app listening on port 80!')
  connectDB();
});
