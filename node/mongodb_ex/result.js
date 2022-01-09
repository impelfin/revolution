var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const options = {useUnifiedTopology: true};

MongoClient.connect(url, options, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("things").find({}, { projection: { empno: 1, ename: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result[2].ename);
    db.close();
  });
});
