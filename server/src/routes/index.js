const usersRouter = require('./UsersRouter')
const productsRouter = require('./ProductsRouter')

const routes = (app) => {
  app.use('/api/user', usersRouter)
  app.use('/api/product', productsRouter)
}

module.exports = routes