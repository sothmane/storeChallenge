var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var cors = require("cors");

var app = express();
var port = 3000;
var url = "mongodb://localhost:27017";

app.use(cors());


// listing all the  stores 
app.get('/list', (req, res, next) => {

    MongoClient.connect(url, function (err, client) {
    
        if (err) throw err;
    
        console.log("connected !");
    
        var db = client.db("test");
    
        db.collection('shops').find({}).toArray(function (err, result) {
    
            if (err) throw err;

            res.type('json');

            res.end(JSON.stringify(result));
        });

    });

});

// listing the specified store using its Id
app.get('/list/:id', (req, res, next) => {

    console.log(req.params.id);

    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
      
        console.log("connected !");
      
        var db = client.db("test");
      
        db.collection('shops').find({ _id: ObjectId(req.params.id) }).toArray(function (err, result) {
      
            if (err) throw err;

            res.type('json');
            res.end(JSON.stringify(result));
        });

    });

});

// executing the server and listening for users requests
app.listen(
    port,
    () => console.log(`running at http://localhost:${port}`)
);