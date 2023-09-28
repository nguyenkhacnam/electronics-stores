const usersRouter = require('./UsersRouter')
const productsRouter = require('./ProductsRouter')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const routes = (app) => {
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Electronics-Stores',
        description: 'API documentation for Electronics-Stores',
        version: '1.0.11',
      },
    }, 
    apis: ['./electronics-stores-swagger.yaml'], // files containing annotations as above
  };
  const openapiSpecification = swaggerJsdoc(options)
  app.use('/api/user', usersRouter)
  app.use('/api/product', productsRouter)
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
}

module.exports = routes