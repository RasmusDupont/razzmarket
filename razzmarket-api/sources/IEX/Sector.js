const { makeGETRequest } = require('./StockAPI')

function getSectorPerformance() {
    return makeGETRequest('/stock/market/sector-performance').then(Promise.resolve(true)).catch(console.log(error))
}

module.exports = {
    getSectorPerformance
}