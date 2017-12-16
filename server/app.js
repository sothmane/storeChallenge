var express = require('express');
var app = express();
var port = 3000;
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId; 
var url = "mongodb://localhost:27017";
var cors = require("cors");
app.use(cors());
app.listen(
    port,
    () => console.log(`\uD83C\uDF0F running at http://localhost:${port}`)
);
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
app.get('/list/:id', (req, res, next) => {

    console.log(req.params.id);

    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        console.log("connected !");
        var db = client.db("test");
        db.collection('shops').find({_id: ObjectId(req.params.id)}).toArray(function(err, result) {
            if (err) throw err;
           
            res.type('json');
            res.end(JSON.stringify(result));
        });

    });

});