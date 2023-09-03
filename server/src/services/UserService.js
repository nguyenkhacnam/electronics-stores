const User = require('../models/UserModel')
const bcrypt = require('bcrypt')
const jwtService = require('./JwtService')

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
          const saltRounds = 10
          const hash = bcrypt.hashSync(password, saltRounds)
          const createdUser = await User.create({
            name,
            email,
            password: hash,
            confirmPassword: hash,
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

  // [POST] /api/user/login
  loginUser(user) {
    return new Promise(async (resolve, reject) => {
      const { email, password } = user
      try {
        const checkUser = await User.findOne({ email })
        if (checkUser === null) {
          resolve({
            status: 'ERR',
            message: 'The password that you have entered is incorrect'
          })
        } else {
          const comparePassword = bcrypt.compareSync(password, checkUser.password)
          if (!comparePassword) {
            resolve({
              status: 'ERR',
              message: 'The password or user is incorrect'
            })
          } else {
            const accessToken = await jwtService.generateAccessToken({
              id: checkUser._id,
              isAdmin: checkUser.isAdmin
            })

            const refreshToken = await jwtService.generateAccessToken({
              id: checkUser._id,
              isAdmin: checkUser.isAdmin
            })
            console.log('accessToken', accessToken)
            resolve({
              status: 'OK',
              message: 'Thành công',
              accessToken,
              refreshToken
            })
          }
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  // [PUT] /api/user/update-user/:id
  updateUser(id, data) {
    return new Promise(async (resolve, reject) => {
      try {
        const checkUser = await User.findOne({ _id: id })
        console.log('checkUser', checkUser)
        if (checkUser === null) {
          resolve({
            status: 'ERR',
            message: 'The user is not defined'
          })
        }

        const updatedUser = await User.findByIdAndUpdate(id, data, { new: true })
        console.log('updateUser', updatedUser)

        resolve({
          status: 'OK',
          message: 'Thành công',
          data: updatedUser
        })
      } catch (error) {
        reject(error)
      }
    })
  }


  // [DELETE] /api/user/delete-user/:id
  deleteUser(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const checkUser = await User.findOne({ _id: id })
        console.log('checkUser', checkUser)
        if (checkUser === null) {
          resolve({
            status: 'ERR',
            message: 'The user is not defined'
          })
        }

        await User.findByIdAndDelete(id)

        resolve({
          status: 'OK',
          message: 'Delete user success',
        })
      } catch (error) {
        reject(error)
      }
    })
  }


  // [GET] /api/user/getAllUsers
  getAllUsers() {
    return new Promise(async (resolve, reject) => {
      try {
        const getAllUsers = await User.find()
        // console.log('checkUser', getAllUsers)
        resolve({
          status: 'OK',
          message: 'Get All Users success',
          data: getAllUsers
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = new UserService