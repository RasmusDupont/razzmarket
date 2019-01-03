const { makeGETRequest } = require('./StockAPI')

function getSectorCollection(sector) {
    let sector = encodeURI(sector)
    return makeGETRequest(`/stock/market/collection/sector?collectionName=${sector}`).then(Promise.resolve(true)).catch(console.log(error))
}

function getTagCollection(tag) {
    let tag = encodeURI(tag)
    return makeGETRequest(`/stock/market/collection/tag?collectionName=${tag}`).then(Promise.resolve(true)).catch(console.log(error))
}

function getListCollection(list) {
    let list = encodeURI(list)
    return makeGETRequest(`/stock/market/collection/list?collectionName=${list}`).then(Promise.resolve(true)).catch(console.log(error))
}

module.exports = {
    getSectorCollection,
    getTagCollection,
    getListCollection
}
