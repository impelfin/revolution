const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
<<<<<<< HEAD
const morgan = require('morgan');
=======
>>>>>>> 8d636723bb0f82ca1bf4595487a1bc11ed79899c

const HTTP_PORT = 80;
const HTTPS_PORT = 443;

const options = {
  key: fs.readFileSync('./rootca.key'),
  cert: fs.readFileSync('./rootca.crt')
};

const app = express();

// Default route for server status
app.get('/', (req, res) => {
  res.json({ message: `Server is running on port ${req.secure ? HTTPS_PORT : HTTP_PORT}` });
});

// Create an HTTP server.
http.createServer(app).listen(HTTP_PORT);

// Create an HTTPS server.
https.createServer(options, app).listen(HTTPS_PORT);
