const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//define scheme
var userSchema = mongoose.Schema({
      ename: String,
      empno : Number
});

var User = mongoose.model('things',userSchema);

// list
router.get('/list', function(req, res, next) {
      User.find({},function(err,docs){
           if(err) console.log('err');
           res.writeHead(200);
           var template = `
           <!doctype html>
           <html>
           <head>
             <title>Result</title>
             <meta charset="utf-8">
           </head>
           <body>
             ${docs}
           </body>
           </html>
          `;
           res.end(template);
      });
});

// get
router.get('/get', function(req, res, next) {
      db = req.db;
      var input = req.query.input
      User.findOne({'empno':input},function(err,doc){
           if(err) console.log('err');
            res.send(doc);
      });
});


module.exports = router;

User.find({}).exec(function(err,things){
      console.log("Query 1");
      console.log(things+"\n");
      return;
});
