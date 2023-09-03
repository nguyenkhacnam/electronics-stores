const express = require('express')
const router = express.Router()
const usersControllers = require('../controllers/UsersControllers')

router.post('/register', usersControllers.createUser)

module.exports = router
