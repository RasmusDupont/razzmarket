const axios = require('axios')
const baseURL = process.env.APIurl

function makeGETRequest(url) {
    axios.get(baseURL + url).then(response => {
        console.log(response.data)
    }).catch(error => {
        console.log(error)
    })
}

module.exports = {
  makeGETRequest
}
