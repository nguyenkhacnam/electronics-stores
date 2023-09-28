const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

class AuthenticationMiddleware {
  
  /**
 * Middleware for handling admin authorization.
 * This middleware verifies the JWT token in the request headers and checks if the user is an admin.
 * If the token is valid and the user is an admin, it allows the request to continue to the next middleware.
 * If the token is invalid or the user is not an admin, it returns an authentication error response.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
  authMiddleware(req, res, next) {
    // console.log('first', req.headers.token)
    const token = req.headers.Authorization?.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
      if (err) {
        return res.status(404).json({
          status: 'ERR',
          message: 'Authentication failed. Invalid or expired token'
        })
      }
      const { payload } = user

      // Check if the user is an admin
      if (payload?.isAdmin) {
        // If the user is an admin, allow the request to continue
        next()
      } else {
         // If the user is not an admin, return an authentication error
        return res.status(404).json({
          status: 'ERR',
          message: 'Authentication failed. User is not an admin'
        })
      }
    })
  }

  // Middleware for handling user authentication and authorization.
  //This middleware verifies the JWT token in the request headers and checks if the user is authorized to access the requested user's information.
  authUserMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1]
    const userId = req.params.id
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
      if (err) {
        return res.status(404).json({
          status: 'ERR',
          message: 'Authentication failed. Invalid or expired token'
        })
      }
      const { payload } = user
       // Check if the user is an admin or if they are accessing their own information
      if (payload?.isAdmin || payload?.id === userId) {
        // If the user is authorized, allow the request to continue
        next()
      } else {
        // If the user is not authorized, return an authentication error
        return res.status(404).json({
          status: 'ERR',
          message: 'Authentication failed. User is not authorized to access this information'
        })
      }
    })
  }
}

module.exports = new AuthenticationMiddleware