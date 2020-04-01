// Require the packages.
const express = require("express");
const favicon = require("express-favicon");
const path = require("path");

// Define the express server
const port = process.env.PORT || 8080;
const app = express();

// Apply the middleware.
app.use(favicon(__dirname + "/build/favicon.ico"));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

// Setup the endpoints.
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// let the app listnet to a specific port.
app.listen(port);