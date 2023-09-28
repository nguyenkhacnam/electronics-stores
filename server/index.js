const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const database = require('./src/config/database')
const routes = require('./src/routes')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
dotenv.config()
const swaggerUi = require('swagger-ui-express')
const fs = require("fs")
const YAML = require('yaml')
const path = require('path')

const file  = fs.readFileSync(path.resolve('electronics-stores-swagger.yaml'), 'utf8')
const swaggerDocument = YAML.parse(file)

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// http logger
app.use(morgan('combined'))

routes(app)

//connect to database
database.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})