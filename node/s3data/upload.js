const fs = require('fs');
const AWS =  require('aws-sdk');
const BUCKET_NAME = 's3-028bucket';
const s3 = new AWS.S3({accessKeyId: 'accessKeyId', secretAccessKey:'secretAccessKey'});

const uploadFile = (fileName) => {
  const fileContent = fs.readFileSync(fileName);
  const params = {
    Bucket: BUCKET_NAME,
    Key: 'axios.png',
    Body: fileContent
  };
  s3.upload(params, function(err, data) {
    if (err) {throw err;}
    console.log(`File uploaded succssfully. ${data.Location}`);
  });
};
uploadFile('axios.png');
