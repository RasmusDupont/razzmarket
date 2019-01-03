const { makeGETRequest } = require('./StockAPI')

function earningsToday() {
    return makeGETRequest('/stock/market/today-earnings').then(Promise.resolve(true)).catch(console.log(error))
}

module.exports = {
    earningsToday
}