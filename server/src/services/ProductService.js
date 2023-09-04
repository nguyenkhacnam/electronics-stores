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

  // [PUT] /api/product/update/:id
  updateProduct(id, data) {
    return new Promise(async (resolve, reject) => {
      try {
        const checkProduct = await Product.findOne({ _id: id })
        if (checkProduct === null) {
          resolve({
            status: 'ERR',
            message: 'The product is not defined'
          })
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true })
        resolve({
          status: 'OK',
          message: 'Updated Product Success',
          data: updatedProduct
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  // [GET] /api/product/detail/:id
  getDetailProduct(id) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log('id', id)

        const getDetailProduct = await Product.findOne({ _id: id })
        console.log('getDetailProduct', getDetailProduct)
        if (getDetailProduct === null) {
          resolve({
            status: 'ERR',
            message: 'The product is not defined'
          })
        }
        resolve({
          status: 'OK',
          message: 'Get Detail Product success',
          data: getDetailProduct
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  // [DELETE] /api/product/delete/:id
  deleteProduct(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const checkProduct = await Product.findOne({ _id: id })
        if (checkProduct === null) {
          resolve({
            status: 'ERR',
            message: 'The product is not defined'
          })
        }
        await Product.findByIdAndDelete(id)

        resolve({
          status: 'OK',
          message: 'Delete Product success',
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  // [GET] /api/product/getAllProduct
  getAllProduct() {
    return new Promise(async (resolve, reject) => {
      try {
        const getAllProduct = await Product.find()
        resolve({
          status: 'OK',
          message: 'Get All Product success',
          data: getAllProduct
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = new ProductService