const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//define scheme
var userSchema = mongoose.Schema({
      userid: String,
      sex : String,
      city : String,
      age : Number
});

// create model with mongodb collection & scheme
var User = mongoose.model('users',userSchema);

// select city from users where userid='terry'
User.findOne({'userid':'terry'}).select('city').exec(function(err,user){
      console.log("q1");
      console.log(user+"\n");
      return;
});

// select * from users where city='seoul' order by userid limit 5
User.find({'city':'seoul'}).sort({'userid':1}).limit(5).exec(function(err,users){
      console.log("q2");
      console.log(users+"\n");
      return;
});

// using JSON doc query
// select userid,age from users where city='seoul' and age > 10 and age < 29
User.find({'city':'seoul', 'age':{$gt:10 , $lt:29}})
      .sort({'age':-1})
      .select('userid age')
      .exec(function(err,users){
           console.log("q3");
           console.log(users+"\n");
           return;
});

//using querybuilder
//select userid,age from users where city='seoul' and age > 10 and age < 29
User.find({})
      .where('city').equals('seoul')
      .where('age').gt(10).lt(29)
      .sort({'age':-1})
      .select('userid age')
      .exec(function(err,users){
           console.log("q4");
           console.log(users+"\n");
           return;
});

// insert
router.post('/insert', function(req, res, next) {
      var userid = req.body.userid;
      var sex = req.body.sex;
      var city = req.body.city;
      var user = new User({'userid':userid,'sex':sex,'city':city});

      user.save(function(err,silence){
             if(err){
                console.log(err);
                res.status(500).send('update error');
                return;
             }
             res.status(200).send("Inserted");
         });
});

// update
router.post('/update', function(req, res, next) {
      var userid = req.body.userid;
      var sex = req.body.sex;
      var city = req.body.city;
      User.findOne({'userid':userid},function(err,user){
           if(err){
               console.log(err);
               res.status(500).send('update error');
               return;
          }
           user.sex = sex;
           user.city = city;
           user.save(function(err,silence){
                  if(err){
                     console.log(err);
                     res.status(500).send('update error');
                     return;
                  }
                  res.status(200).send("Updated");
              });
      });
});

// list
router.get('/list', function(req, res, next) {
      User.find({},function(err,docs){
           if(err) console.log('err');
           res.send(docs);
      });
});

// get
router.get('/get', function(req, res, next) {
      db = req.db;
      var userid = req.query.userid
      User.findOne({'userid':userid},function(err,doc){
           if(err) console.log('err');
            res.send(doc);
      });
});

module.exports = router;
