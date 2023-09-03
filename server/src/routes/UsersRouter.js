const express = require('express')
const router = express.Router()
const usersControllers = require('../controllers/UsersControllers')

router.get('/', usersControllers.index)

module.exports = router
