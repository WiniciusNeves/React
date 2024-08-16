const expreess = require('express')


module.exports = function (server) {
    //url base
    const router = expreess.Router()
    server.use('/api', router)

    //rotas do ciclo de pagamento
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    router.use('/billingCycles', billingCycleService)
}
