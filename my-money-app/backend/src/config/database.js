const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/mymoney', {
    serverSelectionTimeoutMS: 30000 // Se necessário, configure o tempo limite para a seleção do servidor
})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err))

module.exports = mongoose
