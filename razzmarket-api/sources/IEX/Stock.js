const { makeGETRequest } = require('./StockAPI')

function getCompany(symbol) {
    return makeGETRequest(`/stock/${symbol}/company`).then(Promise.resolve(true)).catch(console.log(error))
}

function getStockPrice(symbol) {
    return makeGETRequest(`/stock/${symbol}/price`).then(Promise.resolve(true)).catch(console.log(error))
}

function getDividends(symbol, range) {
    return makeGETRequest(`/stock/${symbol}/dividends/${range}`).then(Promise.resolve(true)).catch(console.log(error))
}

//most recent reported quarters
function getCompanyEarnings(symbol) {
    return makeGETRequest(`/stock/${symbol}/earnings`).then(Promise.resolve(true)).catch(console.log(error))
}

function getEffectiveSpread(symbol) {
    return makeGETRequest(`/stock/${symbol}/effective-spread`).then(Promise.resolve(true)).catch(console.log(error))
}

module.exports = {
    getCompany,
    getStockPrice,
    getDividends,
    getCompanyEarnings,
    getEffectiveSpread
}