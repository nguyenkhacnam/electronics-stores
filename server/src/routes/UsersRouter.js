const express = require('express')
const router = express.Router()
const usersControllers = require('../controllers/UsersControllers')
const authenticationMiddleware = require('../middleware/authenticationMiddleware')

router.post('/register', usersControllers.createUser)
router.post('/login', usersControllers.loginUser)
router.put('/update-user/:id', usersControllers.updateUser)
router.delete('/delete-user/:id', authenticationMiddleware.authMiddleware, usersControllers.deleteUser)
router.get('/getAllUsers', authenticationMiddleware.authMiddleware, usersControllers.getAllUsers)
router.get('/getDetailUser/:id', authenticationMiddleware.authUserMiddleware, usersControllers.getDetailUser)
router.post('/refresh-token', usersControllers.refreshToken)

module.exports = router
