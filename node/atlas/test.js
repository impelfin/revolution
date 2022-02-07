var axios = require('axios');
var data = JSON.stringify({
    "collection": "test",
    "database": "testdb",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 0,
        "id": 1,
        "name": 1
    }
});

var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-noamn/endpoint/data/beta/action/findOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'QZXaOZZUjgbVdTHh8VfMhRhzgRO3xFDib4Q7Zips666i1iMdFL5Tnxi7c39wdruf'
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
