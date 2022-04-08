const express = require('express');
const app = express.Router();
const mongoose = require('mongoose');

//define scheme
var userSchema = mongoose.Schema({
<<<<<<< HEAD
  addr : String,
  name : String,
  price : Number,
  inventory : Number
=======
      addr : String,
      name : String,
      price : Number,
      inventory : Number
>>>>>>> f081615df629bc220afad585117bb689c948a90f
});

var User = mongoose.model('yososu',userSchema);
// create model with mongodb collection & scheme

app.get('/list', function(req, res, next) {
<<<<<<< HEAD
  User.find({},function(err,docs) {
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
          <table border="1" margin: auto; text-align: center;>
            <tr>
              <th> 이름 </th>
              <th> 주소 </th>
              <th> 가격 </th>
              <th> 잔량(L) </th>
            </tr>
        `;
        for(var i=0;i<docs.length;i++) {
          template += `
            <tr>
              <th>${docs[i]['name']}</th>
              <th>${docs[i]['name']}</th>
              <th>${docs[i]['price']}</th>
              <th>${docs[i]['inventory']}</th>
            </tr>
            `;
          }
          template +=`
          </table>
        </body>
        </html>
      `;
      res.end(template);
  });
=======
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
                <table border="1" margin: auto; text-align: center;>
                  <tr>
                    <th> 이름 </th>
                    <th> 주소 </th>
                    <th> 가격 </th>
                    <th> 잔량(L) </th>
                  </th>`;
                  for(var i=0;i<docs.length;i++){
                    template += `
                  <tr>
                    <th>${docs[i]['name']}</th>
                    <th>${docs[i]['name']}</th>
                    <th>${docs[i]['price']}</th>
                    <th>${docs[i]['inventory']}</th>
                  </tr>`
                }
                 template +=`</table>
               </body>
               </html>
              `;
               res.end(template);
      });
>>>>>>> f081615df629bc220afad585117bb689c948a90f
});

app.get("/api/finds",(req,res) => {
  const addr = req.query.addr;
  User.find({'addr' :{$regex:addr}}).select('addr name price inventory').exec(function(err,docs){
    if(err) console.log('err');
<<<<<<< HEAD
    res.writeHead(200);
      var template = `
        <!doctype html>
        <html>
        <head>
          <title>Result</title>
          <meta charset="utf-8">
        </head>
        <body>
          <table border="1" margin: auto; text-align: center;>
            <tr>
              <th> 이름 </th>
              <th> 주소 </th>
              <th> 가격 </th>
              <th> 잔량(L) </th>
            </tr>
        `;
        for(var i=0;i<docs.length;i++) {
          template += `
            <tr>
              <th>${docs[i]['name']}</th>
              <th>${docs[i]['addr']}</th>
              <th>${docs[i]['price']}</th>
              <th>${docs[i]['inventory']}</th>
            </tr>
          `;
        }
        template +=`
        </table>
      </body>
      </html>
      `;
    res.end(template);
  });
=======
           res.writeHead(200);
           var template = `
           <!doctype html>
           <html>
           <head>
             <title>Result</title>
             <meta charset="utf-8">
           </head>
           <body>
            <table border="1" margin: auto; text-align: center;>
              <tr>
                <th> 이름 </th>
                <th> 주소 </th>
                <th> 가격 </th>
                <th> 잔량(L) </th>
              </th>
              `;
              for(var i=0;i<docs.length;i++){
                template += `
              <tr>
                <th>${docs[i]['name']}</th>
                <th>${docs[i]['addr']}</th>
                <th>${docs[i]['price']}</th>
                <th>${docs[i]['inventory']}</th>
              </tr>
              `;
            }
             template +=`
            </table>
           </body>
           </html>
          `;
           res.end(template);
  })
>>>>>>> f081615df629bc220afad585117bb689c948a90f
});

app.post("/api/find/addr",(req,res) => {
  const addr = req.body.addr;
  User.find({'addr' :{$regex:addr}}).select('addr name price inventory').exec(function(err,docs){
    if(err) console.log('err');
<<<<<<< HEAD
    res.writeHead(200);
      var template = `
        <!doctype html>
        <html>
        <head>
          <title>Result</title>
          <meta charset="utf-8">
        </head>
        <body>
          <table border="1" margin: auto; text-align: center;>
            <tr>
              <th> 이름 </th>
              <th> 주소 </th>
              <th> 가격 </th>
              <th> 잔량(L) </th>
            </tr>
          `;
          for(var i=0;i<docs.length;i++){
            template += `
            <tr>
              <th>${docs[i]['name']}</th>
              <th>${docs[i]['addr']}</th>
              <th>${docs[i]['price']}</th>
              <th>${docs[i]['inventory']}</th>
            </tr>
          `;
        }
        template +=`
        </table>
      </body>
      </html>
      `;
    res.end(template);
=======
           res.writeHead(200);
           var template = `
           <!doctype html>
           <html>
           <head>
             <title>Result</title>
             <meta charset="utf-8">
           </head>
           <body>
            <table border="1" margin: auto; text-align: center;>
              <tr>
                <th> 이름 </th>
                <th> 주소 </th>
                <th> 가격 </th>
                <th> 잔량(L) </th>
              </th>
              `;
              for(var i=0;i<docs.length;i++){
                template += `
              <tr>
                <th>${docs[i]['name']}</th>
                <th>${docs[i]['addr']}</th>
                <th>${docs[i]['price']}</th>
                <th>${docs[i]['inventory']}</th>
              </tr>
              `;
            }
             template +=`
            </table>
           </body>
           </html>
          `;
           res.end(template);
>>>>>>> f081615df629bc220afad585117bb689c948a90f
  })
});
module.exports = app;
