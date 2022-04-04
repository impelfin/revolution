<<<<<<< HEAD
// const send_message = require('../sens/sens')
=======
>>>>>>> 8a84c9126950f1e4d87284e1b07efe2988c0caf4
const express = require("express");
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

//create signature2
var CryptoJS = require('crypto-js');
var SHA256 = require('crypto-js/sha256');
var Base64 = require('crypto-js/enc-base64');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/Hello", (req, res) => {
  res.send("Hello SMS Service~!!");
});

app.post("/send_sms", (req, res) => {
    const user_name = req.body.name
    const user_phone_number = req.body.phone_number
    const user_msg = req.body.msg

    var resultCode = 200;
    const date = Date.now().toString();

    // 환경변수로 저장했던 중요한 정보들
<<<<<<< HEAD
    const serviceId = 'serviceID';
    const accessKey = 'accessKey';
    const secretKey = 'secretKey';
    const my_number = '01082882075';
=======
    const serviceId = '서비스ID';
    const accessKey = '액세스키';
    const secretKey = '시크릿키';
    const my_number = '본인 번호';
>>>>>>> 8a84c9126950f1e4d87284e1b07efe2988c0caf4

    // 그 외 url 관련
    const method = "POST";
    const space = " ";
    const newLine = "\n";
    const url = `https://sens.apigw.ntruss.com/sms/v2/services/${serviceId}/messages`;
    const url2 = `/sms/v2/services/${serviceId}/messages`;

    // 중요한 key들을 한번 더 crypto-js 모듈을 이용하여 암호화 하는 과정.
    const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
    hmac.update(method);
    hmac.update(space);
    hmac.update(url2);
    hmac.update(newLine);
    hmac.update(date);
    hmac.update(newLine);
    hmac.update(accessKey);
    const hash = hmac.finalize();
    const signature = hash.toString(CryptoJS.enc.Base64);

    request({
		    method : method,
		    json : true,
		    uri : url,
    		headers : {
    			'Contenc-type': 'application/json; charset=utf-8',
    			'x-ncp-iam-access-key': accessKey,
    			'x-ncp-apigw-timestamp': date,
    			'x-ncp-apigw-signature-v2': signature
    		},
    		body : {
    			'type' : 'SMS',
    			'countryCode' : '82',
    			'from' : my_number,
<<<<<<< HEAD
    			'content' : `${user_name}의 메시지 ${user_msg}`,
=======
    			'content' : `${user_name} 발송 메시지 ${user_msg}`,
>>>>>>> 8a84c9126950f1e4d87284e1b07efe2988c0caf4
    			'messages' : [
    				{
    					'to' : `${user_phone_number}`
    				}
    			]
    		}
    	}, function(err, res, html) {
    		if(err) console.log(err);
    		else {
    			resultCode = 200;
    			console.log(html);
    		}
    	});

    	res.json({
    		'Code' : resultCode, 'Name' : user_name, 'Phone_Number' : user_phone_number, 'Message' : user_msg
    	});
});

module.exports = app;
