const Product = require('../models/ProductModel')

class ProductService {

  // [POST] /api/product/create
  createProduct(newProduct) {
    return new Promise(async (resolve, reject) => {
      const { name, image, type, price, countInStock, rating, description } = newProduct
      try {
        const checkProduct = await Product.findOne({ name })
        console.log('checkProduct', checkProduct)
        if (checkProduct !== null) {
          resolve({
            status: 'ERR',
            message: 'The name of product is already exist'
          })
        }
        const createProduct = await Product.create({
          name, 
          image, 
          type, 
          price, 
          countInStock, 
          rating, 
          description
        })
        if (createProduct) {
          resolve({
            status: 'OK',
            message: 'Create Product Success',
            data: createProduct
          })
        }
      } catch (error) {
        reject(error)
      }
    })
  }

}

module.exports = new ProductService