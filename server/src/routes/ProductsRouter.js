const express = require('express')
const router = express.Router()
const productsControllers = require('../controllers/ProductsControllers')

router.post('/create', productsControllers.createProduct)
router.put('/update/:id', productsControllers.updateProduct)

module.exports = router
