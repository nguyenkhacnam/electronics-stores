const express = require('express')
const router = express.Router()
const usersControllers = require('../controllers/UsersControllers')

router.post('/register', usersControllers.createUser)
router.post('/login', usersControllers.loginUser)
router.put('/update-user/:id', usersControllers.updateUser)

module.exports = router
