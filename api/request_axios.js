const axios = require('axios')

axios
  .get('http://54.180.44.109:3000/api/users')
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
