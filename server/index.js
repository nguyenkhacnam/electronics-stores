const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const database = require('./src/config/database')
const routes = require('./src/routes')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
dotenv.config()
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const app = express()
const port = process.env.PORT
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Electronics-Stores-API',
      description: `### Simple and Developer-Friendly API Documentation for Electronics Stores.
      \n Welcome to the API Documentation for Electronics Stores! This API allows you to interact with our online electronics store, where you can browse and purchase a wide range of electronic products such as smartphones, laptops, and more. I've adopted a design-first approach to continuously improve our API and provide you with the best shopping experience
      \n **Note**: Please be aware that our API may experience occasional delays, and response times could be up to 1 minute.I'm apologize for any inconvenience this may cause.`,
      contact: {
        email: 'namkhac605@gmail.com'
      },
      version: '1.0.0'
    },
    externalDocs: {
      description: 'Source Repository',
      url: 'https://github.com/nguyenkhacnam/electronics-stores'
    },
    servers: [
      {
        url: 'https://electronics-stores-render-api.onrender.com/api'
      }
    ],
  }, 
  apis: ['./electronics-stores-api.yaml'], // files containing annotations as above
};
const openapiSpecification = swaggerJsdoc(options)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

// http logger
app.use(morgan('combined'))

routes(app)

//connect to database
database.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})