const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const database = require('./config/database')
dotenv.config()

//connect to database
database.connect()

const app = express()
const port = process.env.PORT

// http logger
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})