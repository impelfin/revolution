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
<<<<<<< HEAD
<<<<<<< HEAD
        'api-key': 'Py5TABOEowZWkbfW14AozLgDpBbEE59CE9CkIzunsb6h0p4zLxCQUohvv01Qh0Mg'
=======
        'api-key': '61fc99950752dd835585a006'
>>>>>>> da0734bf381ea074d03ac91cdf74f37102ac31c8
=======
        'api-key': 'QZXaOZZUjgbVdTHh8VfMhRhzgRO3xFDib4Q7Zips666i1iMdFL5Tnxi7c39wdruf'
>>>>>>> 3fab67c748d1af2f62f329dfcf1ebbde654df432
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
