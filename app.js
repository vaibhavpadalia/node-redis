/**
 * @author Vaibhav Padalia
 * @description This file is an entry point for this application
 */

var express = require("express");
var argv = require("minimist")(process.argv.slice(2));
var bodyParser = require("body-parser");
var app = express();
var cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('*', (req, res) => {
  res.json({
    responseCode: 404,
    message: "Route not found.",
    success: false
  });
});

// Configure the API domain
var domain = "localhost";
if (argv.domain !== undefined) domain = argv.domain;
else console.log('No --domain=xxx specified, taking default hostname "localhost".');

// Configure the API port
var port = 4400;

// port = 4400 for dev
if (argv.port !== undefined) port = argv.port;
else console.log("No --port=xxx specified, taking default port " + port + ".");

// Set and display the application URL
var applicationUrl = "http://" + domain + ":" + port;
console.log("API running on " + applicationUrl);

// Start the web server
app.listen(port);
console.log("App Running on port " + port);
