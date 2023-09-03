const express = require('express')
const router = express.Router()
const usersControllers = require('../controllers/UsersControllers')

router.post('/register', usersControllers.createUser)
router.post('/login', usersControllers.loginUser)

module.exports = router
