const userService = require('../services/UserService')
const jwtService = require('../services/JwtService')

class UsersControllers {

  // [POST] /api/user/register
  async createUser(req, res) {
    try {
      const { email, password, confirmPassword } = req.body
      const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      const isCheckEmail = reg.test(email)
      if (!email || !password || !confirmPassword) {
        return res.status(200).json(
          {
            status: 'ERR',
            message: 'The input is required'
          })
      } else if (!isCheckEmail) {
        return res.status(200).json(
          {
            status: 'ERR',
            message: 'The email is required'
          }
        )
      } else if (password !== confirmPassword) {
        return res.status(200).json({
          status: 'ERR',
          message: 'The password equal confirmPassword'
        })
      }
      const response = await userService.createUser(req.body)
      res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({
        message: error
      })
    }
  }


  // [POST] /api/user/login
  async loginUser(req, res) {
    try {
      const { email, password } = req.body
      const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      const isCheckEmail = reg.test(email)
      if (!email || !password) {
        return res.status(200).json(
          {
            status: 'ERR',
            message: 'The input is required'
          })
      } else if (!isCheckEmail) {
        return res.status(200).json(
          {
            status: 'ERR',
            message: 'The email is required'
          }
        )
      }
      const response = await userService.loginUser(req.body)
      const { refreshToken, ...newResponse } = response
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'strict'
      })
      res.status(200).json(newResponse)
    } catch (error) {
      return res.status(404).json({
        message: error
      })
    }
  }

  // [PUT] /api/user/update-user/:id
  async updateUser(req, res) {
    try {
      const userId = req.params.id
      const dataUser = req.body
      if (!userId) {
        res.status(200).json({
          status: 'ERR',
          message: 'The userId is required'
        })
      }
      console.log('id', userId)
      const response = await userService.updateUser(userId, dataUser)
      res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({
        message: error
      })
    }
  }

  // [DELETE] /api/user/delete-user/:id
  async deleteUser(req, res) {
    try {
      const userId = req.params.id
      if (!userId) {
        res.status(200).json({
          status: 'ERR',
          message: 'The userId is required'
        })
      }
      console.log('id', userId)
      const response = await userService.deleteUser(userId)
      res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({
        message: error
      })
    }
  }

  // [GET] /api/user/getAllUsers
  async getAllUsers(req, res) {
    try {
      const response = await userService.getAllUsers()
      res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({
        message: error
      })
    }
  }

  // [GET] /api/user/getDetailUser/:id
  async getDetailUser(req, res) {
    try {
      const userId = req.params.id
      if (!userId) {
        return res.status(200).json({
          status: 'ERR',
          message: 'The userId is required'
        })
      }
      const response = await userService.getDetailUser(userId)
      res.status(200).json(response)
    } catch (error) {
      return res.status(404).json({
        message: error
      })
    }
  }

  // [POST] /api/user/refreshToken
  async refreshToken(req, res) {
    // console.log('req.cookie', req.cookies)
    // console.log('req.cookies.refreshToken', req.cookies.refreshToken)
    try {
      let token = req.cookies.refreshToken
      if (!token) {
        return res.status(200).json({
          status: 'ERR',
          message: 'The token is required'
        })
      }
      const response = await jwtService.refreshTokenJwtService(token)
      return res.status(200).json(response)
    } catch (e) {
      return res.status(404).json({
        message: e
      })
    }
  }

  // [POST] /api/user/logout
  async logoutUser(req, res) {
    try {
      res.clearCookie('refreshToken')
      return res.status(200).json({
        status: 'OK',
        message: 'Logout successfully'
      })
    } catch (e) {
      return res.status(404).json({
        message: e
      })
    }
  }

    // [DELETE] /api/user/delete-many
    async deleteMany(req, res) {
      try {
        const userIds = req.body
        if (!userIds) {
          return res.status(400).json({
            status: 'ERR',
            message: 'The userIds is required'
          })
        }
        const response = await userService.deleteMany(userIds)
        res.status(200).json(response)
      } catch (error) {
        return res.status(404).json({
          message: error
        })
      }
    }
}

module.exports = new UsersControllers