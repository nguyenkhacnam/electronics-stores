const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const database = require('./config/database')
const routes = require('./routes')
dotenv.config()

//connect to database
database.connect()

const app = express()
const port = process.env.PORT

// http logger
app.use(morgan('combined'))

routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})