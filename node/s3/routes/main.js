var express  = require('express');
var router   = express.Router();
const multer   = require('multer');
const fs = require('fs');
const AWS = require('aws-sdk');

const ID = 'AKIA234P44R3QOS57UMR';
const SECRET = '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';
const BUCKET_NAME = 'impelfin-bucket';
const MYREGION = 'ap-northeast-2'
const s3 = new AWS.S3({accessKeyId: ID, secretAccessKey: SECRET, region: MYREGION});

var storage  = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploadedFiles/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}__${file.originalname}`);
  },
});
var upload = multer({ dest: 'uploadedFiles/' });
var uploadWithOriginalFilename = multer({ storage: storage });

router.get('/', function(req,res) {
  res.render('upload');
});

router.get("/list", (req, res) => {
  var params = {
    Bucket: BUCKET_NAME,
    Delimiter: '/',
    Prefix: 'uploadedFiles/'
  }
  s3.listObjects(params, function (err, data) {
    if(err)throw err;
    console.log(data);
    //res.json(data.Contents);
    res.writeHead(200);
      var template = `
        <!doctype html>
        <html>
        <head>
          <title>Result</title>
          <meta charset="utf-8">
        </head>
        <body>
          <table border="1" margin: auto; text-align: center;>
          <tr>
            <th> Key </th>
            <th> LastModified </th>
            <th> Size </th>
            <th> StorageClass </th>
            <th> Down </th>
          </tr>
      `;
      for(var i=0;i<data.Contents.length;i++) {
        template += `
          <tr>
            <th>${data.Contents[i]['Key']}</th>
            <th>${data.Contents[i]['LastModified']}</th>
            <th>${data.Contents[i]['Size']}</th>
            <th>${data.Contents[i]['StorageClass']}</th>
            <th>
            <form method='get' action='/downloadFile'>
            <button type="submit" name='dlKey' value=${data.Contents[i]['Key']}>down</button>
            </form>
            </th>
          </tr>
          `;
        }
        template +=`
        </table>
      </body>
      </html>
    `;
    res.end(template);
  })
});

router.post('/uploadFile', uploadWithOriginalFilename.single('attachment'), function(req,res){
  res.render('confirmation', { file:req.file, files:null });

  //s3 upload
  console.log(req.file.filename);
  const filename = req.file.filename;
  const file = 'uploadedFiles/'+filename;
  const uploadFile = (filename) => {
    const fileContent = fs.readFileSync(filename);
    const params = {
      Bucket: BUCKET_NAME,
      Key: filename,
      Body: fileContent
    };
    s3.upload(params, function(err, data) {
      console.log(`File uploaded successfully. ${data.Location}`);
    });
  }
  uploadFile(file);
});

router.get('/downloadFile/:dlKey', function(req,res){
  //s3 download
  var dlKey = req.params('dlKey');

  //console.log(dlKey);
  // const filename = dlkey;
  // const downloadFile = (filename) => {
  //   const fileContent = fs.readFileSync(filename);
  //   const params = {
  //     Bucket: BUCKET_NAME,
  //     Key: filename
  //   };
  //   s3.getObject(params, function(err, data) {
  //     if(err) { throw err; };
  //     fs.writeFileSync(filename, data.Body.toString());
  //   });
  // }
  // downloadFile(filename);
  // res.end('Successful Download Post!');
});

module.exports = router;
