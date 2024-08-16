const port = 3000

const bodyParser = require('body-parser')
const express = require('express')
const AllowCors = require('./cors')
const queryParser = require('express-query-int')

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.use(AllowCors)
server.use(queryParser())

server.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`)
    console.log(`Request Method: ${req.method}`)

    next()
})


server.listen(port, () => console.log(`Executando na porta ${port}`))

module.exports = server
