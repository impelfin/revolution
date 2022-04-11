const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const mysql = require('mysql');
const db = require('../../.config/db_config.json');

var corsOptions = {
  origin : "http://3.35.119.216:3000"
}

var result = {};

app.use(cors(corsOptions));

var pool = mysql.createPool(db);

app.get('/', (req, res) => {
  res.send('Server Response Success');
})

app.get('/hello', (req, res) => {
  res.send({ hello : 'Hello react' });
})

app.get('/api/info', (req, res) => {
  pool.getConnection(function(err, conn) {
    if (!err) {
      console.log('Database Connection Success~!!');
      conn.query("select * from user_info", (err, data) => {
        console.log(data);
        result = data;
      });
    }
    conn.release();
  });
  res.send(result);
})

app.listen(PORT, () => {
  console.log(`Server On : http://3.35.119.216:${PORT}/`);
})
