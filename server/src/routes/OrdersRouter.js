const express = require('express')
const router = express.Router()
const ordersControllers = require('../controllers/OrdersControllers')
const authenticationMiddleware = require('../middleware/authenticationMiddleware')

router.post('/create/:id', authenticationMiddleware.authUserMiddleware, ordersControllers.createOrder)

module.exports = router
