const { makeGETRequests } = require('./StockAPI')

function getSectorCollection(sector) {
    let sector = encodeURI(sector)
    return makeGETRequests(`/stock/market/collection/sector?collectionName=${sector}`).then(Promise.resolve(true)).catch(console.log(error))
}

function getTagCollection(tag) {
    let tag = encodeURI(tag)
    return makeGETRequests(`/stock/market/collection/tag?collectionName=${tag}`).then(Promise.resolve(true)).catch(console.log(error))
}

function getListCollection(list) {
    let list = encodeURI(list)
    return makeGETRequests(`/stock/market/collection/list?collectionName=${list}`).then(Promise.resolve(true)).catch(console.log(error))
}

module.exports = {
    getSectorCollection,
    getTagCollection,
    getListCollection
}
