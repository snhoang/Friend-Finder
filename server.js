// declare the dependencies

var express = require("express");
var bodyParser = require("body-parser");



// configure the express applicatoin

var app = express();

var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlendcoded({ extended: true}));

app.use(bodyParser.json());







app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});