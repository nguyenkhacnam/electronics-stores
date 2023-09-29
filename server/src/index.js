const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const database = require('./config/database')
const routes = require('./routes')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
dotenv.config()
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
// const fs = require("fs")
// const YAML = require('yaml')
// const path = require('path')

// const file  = fs.readFileSync(path.resolve('electronics-stores-swagger.yaml'), 'utf8')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Electronics-Stores',
      description: 'API documentation for Electronics-Stores',
      version: '1.0.11',
    },
  }, 
  apis: ['./src/routes/*.js'], // files containing annotations as above
};
const openapiSpecification = swaggerJsdoc(options)
// const swaggerDocument = YAML.parse(file)

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

// http logger
app.use(morgan('combined'))

routes(app)

//connect to database
database.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})