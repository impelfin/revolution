use test
db.emp.dropIndex({ename:1})
db.emp.ensureIndex({ename:1})
db.emp.find({},{_id:0, eno:1, ename:1}).hint({ename:1}).min({ename:"ALLEN"}).max({ename:"FORD"})
