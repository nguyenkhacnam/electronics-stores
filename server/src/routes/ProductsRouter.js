const express = require('express')
const router = express.Router()
const productsControllers = require('../controllers/ProductsControllers')
const authenticationMiddleware = require('../middleware/authenticationMiddleware')

router.post('/create', authenticationMiddleware.authMiddleware, productsControllers.createProduct)
router.put('/update/:id', authenticationMiddleware.authMiddleware, productsControllers.updateProduct)
router.get('/detail/:id', productsControllers.getDetailProduct)
router.delete('/delete/:id', authenticationMiddleware.authMiddleware, productsControllers.deleteProduct)
router.get('/get-all', productsControllers.getAllProduct)
router.delete('/delete-many', authenticationMiddleware.authMiddleware, productsControllers.deleteMany)

module.exports = router
