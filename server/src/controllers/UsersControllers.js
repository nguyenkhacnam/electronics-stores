const userService = require('../services/UserService')
class UsersControllers {

  // [POST] /api/user/register
  async createUser(req, res) {
    try {
      const { name, email, password, confirmPassword, phone } = req.body
      const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      const isCheckEmail = reg.test(email)
      if (!name || !email || !password || !confirmPassword || !phone) {
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
      res.status(200).json(response)
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
}

module.exports = new UsersControllers