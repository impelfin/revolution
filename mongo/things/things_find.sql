use test
db.things.find()

db.things.find({}, {m:{$slice:-2}})
