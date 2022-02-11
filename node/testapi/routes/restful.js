const express = require("express");
const bodyParser = require('body-parser');
const axios = require('axios');
const CircularJSON = require('circular-json');
const request = require('request');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// simple api
app.get("/Hello", (req, res) => {
  urls = "http://54.180.44.109:3000/Hello";
  request(urls, { json: true }, (err, result, body) => {
    if (err) { return console.log(err); }
    res.send(CircularJSON.stringify(body))
  });
});

// request param X, response O
app.get("/api/users", (req, res) => {
  //res.json({ok:true, users:users});
  axios
    .get('http://54.180.44.109:3000/api/users')
    .then(result => {
      //console.log(`statusCode: ${result.status}`)
      //console.log(result)
      res.send(CircularJSON.stringify(result.data.users))
    })
    .catch(error => {
      console.error(error)
    })
})

// Query param, request param O, response O
app.get("/api/users/user", (req, res) => {
  let urls = "";
  if(req.query.name == null) {
    urls = "http://54.180.44.109:3000/api/users/user?user_id="+req.query.user_id;
  } else {
    urls = "http://54.180.44.109:3000/api/users/user?user_id="+req.query.user_id+"&name="+req.query.name;
  }
  request(urls, { json: true }, (err, result, body) => {
    if (err) { return console.log(err); }
    res.send(CircularJSON.stringify(body.users))
  });
})

// path param, request param O, response O
app.get("/api/users/:user_id", (req, res) => {
  urls = "http://54.180.44.109:3000/api/users/"+req.params.user_id;
  request(urls, { json: true }, (err, result, body) => {
    if (err) { return console.log(err); }
    res.send(CircularJSON.stringify(body.users))
  });
})

// post, request body, response O
app.post("/api/users/userBody", (req, res) => {
  const user_id = req.body.id
  const user = users.filter(data => data.id == user_id);
  res.json({ok:true, users:user});
})

// post, request body, response O
app.post("/api/users/add", (req, res) => {
  const { id, name } = req.body
  const user = users.concat({id, name});
  res.json({ok:true, users:user});
})

// put, request body, response O
app.put("/api/users/update", (req, res) => {
  const { id, name } = req.body
  const user = users.map(data => {
    if(data.id == id) data.name = name
    return {
      id : data.id,
      name : data.name
    }
  })
  res.json({ok:true, users:user});
})

// patch, request path param & body, response O
app.patch("/api/user/update/:user_id", (req, res) => {
  const { user_id } = req.params
  const { name } = req.body
  const user = users.map(data => {
    if(data.id == user_id) data.name = name
    return {
      id : data.id,
      name : data.name
    }
  })
  res.json({ok:true, users:user});
})

// delete, request body, response O
app.delete("/api/user/delete", (req, res) => {
  const { user_id } = req.body
  const user = users.filter(data => data.id != user_id);
  res.json({ok:true, users:user});
})

module.exports = app;
