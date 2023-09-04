const express = require('express')
const router = express.Router()
const productsControllers = require('../controllers/ProductsControllers')
const authenticationMiddleware = require('../middleware/authenticationMiddleware')

router.post('/create', productsControllers.createProduct)
router.put('/update/:id', authenticationMiddleware.authMiddleware, productsControllers.updateProduct)
router.get('/detail/:id', productsControllers.getDetailProduct)

module.exports = router
