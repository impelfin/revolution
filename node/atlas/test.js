var axios = require('axios');
var data = JSON.stringify({
    "collection": "test",
    "database": "testdb",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 0,
        "first_name": 1,
        "last_name": 1,
        "email": 1,
        "gender": 1
    }
});

var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-noamn/endpoint/data/beta/action/findOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'jujDBPTl1oc8Ca4Ii6Rsb7UOJPazR1WBvVBVrGondDLXjF9In0i6TxjGpPA2Sd7I'
    },
    data : data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
