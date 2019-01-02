const express = require('express')
const apiRouter = express.Router()

const stocksRouter = require('./stocks')

apiRouter.use('/stocks', stocksRouter)
