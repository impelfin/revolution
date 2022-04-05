const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');

const HTTP_PORT = 80;
const HTTPS_PORT = 443;

// const options = {
//   key: fs.readFileSync('./rootca.key'),
//   cert: fs.readFileSync('./rootca.crt')
// };

const app = express();

// Default route for server status
app.get('/', (req, res) => {
  res.json({ message: `Server is running on port ${req.secure ? HTTPS_PORT : HTTP_PORT}` });
});

// Create an HTTP server.
http.createServer(app).listen(HTTP_PORT);

// Create an HTTPS server.
https.createServer(app).listen(HTTPS_PORT);
