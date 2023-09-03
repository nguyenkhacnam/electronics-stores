const usersRouter = require('./UsersRouter')

const routes = (app) => {
  app.use('/api/user', usersRouter)
}

module.exports = routes