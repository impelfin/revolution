const express = require('express');
const request = require('request');
const app = express()

// 회원인증
app.post('/login', (req, res) => {
  var url = "http://3.35.119.216:8080/wp-json/wp/v2/users";
  username = "root";
  email = "impelfin@gmail.com"
  password = "1234";
  var auth = "Basic " + new Buffer(username + ":" + email + ":"+ password).toString("base64");

  const options = {
    uri:url,
    method:'POST',
    headers : {
      "Authorization": auth
    }
    // form:{
    //   username:"yoon",
    //   email:"yoon@y.com",
    //   password:"1234"
    // }
  }

  // do the GET request
  request.post(options, function (error, response, body) {
      if(error)
     { console.error("Error while communication with api and ERROR is :  " + error);
     res.send(error);
  }

      console.log(body);
      res.send(body);
  });
});

module.exports = app;
