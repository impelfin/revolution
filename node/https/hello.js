const https = require('https');
const options = require('./config/pem_config').options;
const httpPort = 80;
const httpsPort = 443;

// HTTPS 서버
https.createServer(options, app).listen(httpsPort, () => {
  console.log(`HTTPS: Express listening on port ${httpsPort}`);

// HTTP 서버
app.listen(httpPort, () => {
  console.log(`HTTP: Express listening on port ${httpPort}`);
});
