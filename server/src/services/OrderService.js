const Product = require('../models/ProductModel')
const Order = require('../models/OrderProductModel')

class OrderService {

  // [POST] /api/order/create/:id
  createOrder(newOrder) {
    return new Promise(async (resolve, reject) => {
      const { orderItems, paymentMethod, itemsPrice, shippingPrice, totalPrice, fullName, address, city, phone, user, isPaid, paidAt, email } = newOrder
      try {
        const promises = orderItems.map(async (order) => {
          const productData = await Product.findOneAndUpdate(
            {
              _id: order.product,
              countInStock: { $gte: order.amount }
            },
            {
              $inc: {
                countInStock: -order.amount,
                selled: +order.amount
              }
            },
            { new: true }
          )
          if (productData) {
            return {
              status: 'OK',
              message: 'SUCCESS'
            }
          }
          else {
            return {
              status: 'OK',
              message: 'ERR',
              id: order.product
            }
          }
        })
        const results = await Promise.all(promises)
        const newData = results && results.filter((item) => item.id)
        if (newData.length) {
          const arrId = []
          newData.forEach((item) => {
            arrId.push(item.id)
          })
          resolve({
            status: 'ERR',
            message: `San pham voi id: ${arrId.join(',')} khong du hang`
          })
        } else {
          const createdOrder = await Order.create({
            orderItems,
            shippingAddress: {
              fullName,
              address,
              city, phone
            },
            paymentMethod,
            itemsPrice,
            shippingPrice,
            totalPrice,
            user: user,
            isPaid, paidAt
          })
          if (createdOrder) {
            resolve({
              status: 'OK',
              message: 'success'
            })
          }
        }
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = new OrderService