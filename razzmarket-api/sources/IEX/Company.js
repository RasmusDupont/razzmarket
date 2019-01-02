const { makeGETRequests } = require('./StockAPI')

function getCompany(symbol) {
    return makeGETRequests(`/stock/${symbol}/company`).then(Promise.resolve(true)).catch(console.log(error))
}

function getStockPrice(symbol) {
    return makeGETRequests(`/stock/${symbol}/price`).then(Promise.resolve(true)).catch(console.log(error))
}

module.exports = {
    getCompany,
    getStockPrice
}