"use strict";
const app = require("./app");
const fs = require("fs");
const path = require("path");
const https = require('https');

const port = 5000;

const credentials = {
  key: fs.readFileSync(path.resolve(__dirname, "../cert/server.key"), 'utf8'),
  cert: fs.readFileSync(path.resolve(__dirname, "../cert/server.crt"), 'utf8')
};

let httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, function() {
  console.log('Listening to port ' + port);
});



