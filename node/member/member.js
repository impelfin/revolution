const express = require('express');
const request = require('request');
const app = express()
const mysql = require('mysql')

// MySQL 연결
const mysql_con = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'member',
  database: 'member_db'
});

// 입주민 전체 데이터 불러오기
app.get('/user/resident/info', (req, res) => {
  const sql = 'select * from MEMBER_INFO';
  mysql_con.query(sql, function(err, rows){
    if (err) console.log(err);
    res.send(rows)
  });
});

// 회원 가입
app.post('/user/test', (req, res) => {
  var url = "http://52.79.193.214:8080/wp-json/wp/v2/users";
  username = "root";
  password = "member";
  var auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

  const options = {
    uri:url,
    method:'POST',
    headers : {
      "Authorization": auth
    },
    form:{
      username:"yoon",
      email:"yoon@y.com",
      password:"1234"
    }
  }

  // do the GET request
  request.post(options, function (error, response, body) {
      if(error)
     { console.error("Error while communication with api and ERROR is :  " + error);
     res.send(error);
  }
      console.log('body : ', body);
      res.send(body);
  });
});

module.exports = app;
