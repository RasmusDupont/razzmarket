const { makeGETRequests } = require('./StockAPI')

function getSectorPerformance() {
    return makeGETRequests('/stock/market/sector-performance').then(Promise.resolve(true)).catch(console.log(error))
}

module.exports = {
    getSectorPerformance
}