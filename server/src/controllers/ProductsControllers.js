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

  // [PUT] /api/product/update/:id
  async updateProduct(req, res) {
    try {
      const productId = req.params.id
      const productData = req.body
      if (!productId) {
        res.status(200).json({
          status: 'ERR',
          message: 'The productId is required'
        })
      }
      const response = await productService.updateProduct(productId, productData)
      res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({
        message: error
      })
    }
  }

  // [GET] /api/product/detail/:id
  async getDetailProduct(req, res) {
    try {
      const productId = req.params.id
      if (!productId) {
        return res.status(200).json({
          status: 'ERR',
          message: 'The productId is required'
        })
      }
      console.log('productId', productId)
      const response = await productService.getDetailProduct(productId)
      res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({
        message: error
      })
    }
  }

  // [DELETE] /api/product/delete/:id
  async deleteProduct(req, res) {
    try {
      const productId = req.params.id
      if (!productId) {
        res.status(200).json({
          status: 'ERR',
          message: 'The productId is required'
        })
      }
      console.log('productId', productId)
      const response = await productService.deleteProduct(productId)
      res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({
        message: error
      })
    }
  }

  // [GET] /api/product/get-all
  async getAllProduct(req, res) {
    try {
      const { limit, page, sort, filter } = req.query
      const response = await productService.getAllProduct(Number(limit) || 8, Number(page)|| 0, sort, filter)
      res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({
        message: error
      })
    }
  }

  // [DELETE] /api/product/delete-many
  async deleteMany(req, res) {
    try {
      const productIds = req.body
      if (!productIds) {
        return res.status(400).json({
          status: 'ERR',
          message: 'The productIds is required'
        })
      }
      const response = await productService.deleteMany(productIds)
      res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({
        message: error
      })
    }
  }

}

module.exports = new ProductsControllers