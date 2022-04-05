//express 모듈 불러오기
const express = require("express");
const bodyParser = require('body-parser');

//express 사용
const app = express();

//Express 4.16.0버전 부터 body-parser의 일부 기능이 익스프레스에 내장 body-parser 연결
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/Hello", (req, res) => {

    //Hello World 데이터 반환
    res.send("Hello World");
});

module.exports = app;
