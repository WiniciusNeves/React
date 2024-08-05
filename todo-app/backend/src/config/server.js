const express = require('express')
const mongoose = require('./database')  // Arquivo de conexão com o MongoDB
const allowCors = require('./cors')
const routes = require('./routes')  // Arquivo de rotas atualizado

const port = 3003
const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(allowCors)

// Configurar as rotas
routes(server)

server.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`)
    next()
})

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server
