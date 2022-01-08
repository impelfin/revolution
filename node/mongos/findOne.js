var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://13.125.8.3:27017/";
const options = {useUnifiedTopology: true};

MongoClient.connect(url, options, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("things").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.mb_name);
    db.close();
  });
});
