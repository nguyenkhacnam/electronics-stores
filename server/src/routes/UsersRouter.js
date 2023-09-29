const express = require('express')
const router = express.Router()
const usersControllers = require('../controllers/UsersControllers')
const authenticationMiddleware = require('../middleware/authenticationMiddleware')

router.post('/register', usersControllers.createUser)
/**
 * @openapi
 * /api/user/login:
 *  post:
 *    description: Login
 *    tags: 
 *      - Auth: 
 *    requestBody:
        description: Thông tin đăng nhập
        
 */
router.post('/login', usersControllers.loginUser)
router.put('/update-user/:id', authenticationMiddleware.authUserMiddleware, usersControllers.updateUser)
router.delete('/delete-user/:id', authenticationMiddleware.authMiddleware, usersControllers.deleteUser)
router.get('/getAllUsers', authenticationMiddleware.authMiddleware, usersControllers.getAllUsers)
router.get('/getDetailUser/:id', authenticationMiddleware.authUserMiddleware, usersControllers.getDetailUser)
router.post('/refresh-token', usersControllers.refreshToken)
router.post('/logout', usersControllers.logoutUser)
router.delete('/delete-many', authenticationMiddleware.authMiddleware, usersControllers.deleteMany)

module.exports = router
