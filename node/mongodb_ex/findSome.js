var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const options = {useUnifiedTopology: true};

MongoClient.connect(url, options, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("things").find({}, { projection: { _id: 0, n: 1, m: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
