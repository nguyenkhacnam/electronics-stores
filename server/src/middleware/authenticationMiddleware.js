const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

class AuthenticationMiddleware {
  authMiddleware(req, res, next) {
    // console.log('first', req.headers.token)
    const token = req.headers.token?.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
      if (err) {
        return res.status(404).json({
          status: 'ERR',
          message: 'Authentication failed. Invalid or expired token'
        })
      }
      const { payload } = user
      if (payload?.isAdmin) {
        next()
      } else {
        return res.status(404).json({
          status: 'ERR',
          message: 'Authentication failed. Invalid or expired token'
        })
      }
    })
  }
}

module.exports = new AuthenticationMiddleware