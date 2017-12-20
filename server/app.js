var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var cors = require("cors");
var bodyParser = require('body-parser');
var http = require("http");
var path = require('path');


var app = express();
var port = 3000;
var url = "mongodb://localhost:27017";

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));


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

// adding user to database 
app.post('/add', (req, res) => {
    var usr ={
name:req.body.name,
email:req.body.email,
password:req.body.pass
    };
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        console.log("connected !");
        var db = client.db("test");
        db.collection("user").insertOne(usr, function(err, res) {
            if (err) throw err;
            console.log("1 user inserted");
        
           
          });
        });
        res.end('<!DOCTYPE html>'+
        '<html>'+
        '    <head>'+
        '        <meta charset="utf-8" />'+
        '        <script type="text/javascript">alert("User Added successfully !"); window.location.href="http://127.0.0.1:8080/public/" </script>'+       
        '    </head>'+ 
        '    <body >'+
        '    </body>'+
        '</html>'); 
    
    
    });

// user login 
app.post('/log', (req, res) => {
    
        MongoClient.connect(url, function (err, client) {
            if (err) throw err;
            console.log("connected !");
            var db = client.db("test");
            db.collection('user').find({email:req.body.email, password:req.body.pass}).toArray(function(err, result) {
                if (err) throw err;
               
                console.log(result);
                if(result.length !== 0){
                  res.end('<!DOCTYPE html>'+
                  '<html>'+
                  '    <head>'+
                  '        <meta charset="utf-8" />'+
                  '        <script type="text/javascript">alert("User logged in successfully"); window.location.href="http://127.0.0.1:8080/public/" </script>'+       
                  '    </head>'+ 
                  '    <body >'+
                  '    </body>'+
                  '</html>');
                }else{
                  res.end('<!DOCTYPE html>'+
                  '<html>'+
                  '    <head>'+
                  '        <meta charset="utf-8" />'+
                  '        <script type="text/javascript">alert("Username or password is incorrect !!"); window.location.href="http://127.0.0.1:8080/public/" </script>'+       
                  '    </head>'+ 
                  '    <body >'+
                  '    </body>'+
                  '</html>');
                }
            });
        });
       
    
        
        });
        





// executing the server and listening for users requests
app.listen(
    port,
    () => console.log(`running at http://localhost:${port}`)
);