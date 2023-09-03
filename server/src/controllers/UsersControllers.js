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
}

module.exports = new UsersControllers