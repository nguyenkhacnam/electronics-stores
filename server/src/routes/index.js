const usersRouter = require('./UsersRouter')
const productsRouter = require('./ProductsRouter')
const ordersRouter = require('./OrdersRouter')

const routes = (app) => {
  app.use('/api/user', usersRouter)
  app.use('/api/product', productsRouter)
  app.use('/api/order', ordersRouter)
}

module.exports = routes