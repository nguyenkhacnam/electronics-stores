const User = require('../models/UserModel')

class UserService {

  // [POST] /api/user/register
  createUser(newUser) {
    return new Promise(async (resolve, reject) => {
      const { name, email, password, confirmPassword, phone } = newUser
      try {
        const isAlreadyExist = await User.findOne({ email })
        if (isAlreadyExist !== null) {
          resolve({
            status: 'ERR',
            message: 'The email is already exist'
          })
        } else {
          const createdUser = await User.create({
            name,
            email,
            password,
            confirmPassword,
            phone
          })
          if (createdUser) {
            resolve({
              status: 'OK',
              message: 'Thanh cong',
              data: createdUser
            })
          }
        }
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = new UserService