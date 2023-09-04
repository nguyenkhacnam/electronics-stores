const productService = require('../services/ProductService')

class ProductsControllers {

  // [POST] /api/product/create
  async createProduct(req, res) {
    try {
      const { name, image, type, price, countInStock, rating, description } = req.body
      if (!name || !image || !type || !price || !countInStock || !rating) {
        return res.status(200).json(
          {
            status: 'ERR',
            message: 'The input is required'
          })
      }
      const response = await productService.createProduct(req.body)
      res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({
        message: error
      })
    }
  }

}

module.exports = new ProductsControllers