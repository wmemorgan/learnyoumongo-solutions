// FIND Exercise 3 of 9
const mongo = require('mongodb').MongoClient,
dbURL = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(dbURL, (err, db) => {
    if (err) throw err;
    
    var myDB = db.db('learnyoumongo'),
    query = {age: { $gt: parseInt(process.argv[2]) } };
    
    myDB.collection('parrots')
    .find(query).toArray( (err, documents) => {
        if (err) throw err;
        console.log(documents);
        db.close();
    });
 
});

/* -------NOTES------
1. Load the MongoClient module
const mongo = require('mongodb').MongoClient;

1. Declare the URL
var dbURL = mongodb://localhost:27017/learnyoumongo;

2. Declare the database collection
var dbCollection = process.argv[2];

3. Connect to the database
mongo.connect(dbURL, (err, db) => {
    var collection = db.collection('<collection name');
    collection.find({
        age: greater than ParseInt(process.argv[2])
    }).toArray( (err, documents) => {
        console.log(documents);
    })
})

4. Close the datase connection
db.close


*/