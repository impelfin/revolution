const express = require('express')

const PORT = 8080;

const app = express();
app.get('/',(req,res)=>{
    res.send('Hello NodeJS~!!');
	});

	app.listen(PORT);
	console.log('Running');
