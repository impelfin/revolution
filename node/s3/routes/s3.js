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

// request param X, response O
app.get("/api/users", (req, res) => {
  res.json({ok:true, users:users});
})

// Query param, request param O, response O
app.get("/api/users/user", (req, res) => {
  const user_id = req.query.user_id
  const user = users.filter(data => data.id == user_id);
  res.json({ok:false, users:user});
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

module.exports = app;
