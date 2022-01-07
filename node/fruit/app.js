const mongoose = require("mongoose");

// mongodb://[URL of  MongoDB server]/[Name of DB to connect(make one if doesn't exist)]
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true
});

// Blue print
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

// make collection Fruit => fruits
const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Juicy and sweet"
});

const kiwi = new Fruit({
  name: "kiwi",
  rating: 5,
  review: "Too sour for me"
});

const banana = new Fruit({
  name: "banana",
  rating: 6,
  review: "Tasty but Easy to decay"
});

// CREATE. save object to fruitDB, fruits collection
apple.save();

// Way to save many data to DB in once.
Fruit.insertMany([apple, kiwi, banana], function(err) {
  if (err) {
    console.log(err);
  } else{
    mongoose.connection.close();
    console.log("Successfully saved to fruitDB");
  }
});

// READ. find or select. result returns to 'fruits'
Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(function(element) {
      console.log(element.name);
    });
  }
});

// UPDATE
Fruit.updateOne({
  _id: "5e859d8cef3a5d234c6c19c0"
}, {
  name: "Peach"
}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document");
  }
});

// DELETE
Fruit.deleteOne({
  _id: "5e86a7a216b28f3b08a88755"
}, function(err) {
  if (err) {
    console.log(err);
  } else{
    console.log("Successfully deleted");
  }
});
