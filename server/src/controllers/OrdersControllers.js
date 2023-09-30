const orderService = require('../services/OrderService')

class OrdersControllers {

  // [POST] /api/order/create/:id
  async createOrder(req, res) {
    try {
      const { paymentMethod, itemsPrice, shippingPrice, totalPrice, fullName, address, city, phone } = req.body
      if (!paymentMethod || !itemsPrice || !shippingPrice || !totalPrice || !fullName || !address || !city || !phone) {
        return res.status(400).json({
          status: 'ERR',
          message: 'The input is required'
        })
      }
      const response = await orderService.createOrder(req.body)
      res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({
        message: error
      })
    }
  }

}

module.exports = new OrdersControllers