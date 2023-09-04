const express = require('express')
const router = express.Router()
const productsControllers = require('../controllers/ProductsControllers')

router.post('/create', productsControllers.createProduct)

module.exports = router
