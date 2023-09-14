const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const database = require('./config/database')
const routes = require('./routes')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
dotenv.config()

const app = express()
const port = process.env.PORT

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