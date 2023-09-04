const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
class JwtService {
  generateAccessToken(payload) {
    const accessToken = jwt.sign(
      { payload },
      process.env.ACCESS_TOKEN,
      { expiresIn: '20s' },
    )

    return accessToken
  }

  generateRefreshToken(payload) {
    const refreshToken = jwt.sign(
      { payload },
      process.env.REFRESH_TOKEN,
      { expiresIn: '365d' },
    )

    return refreshToken
  }

  refreshTokenJwtService(token) {
    return new Promise((resolve, reject) => {
      try {
        jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
          if (err) {
            console.log('err', err)
            resolve({
              status: 'ERR',
              message: 'Authentication failed'
            })
          }
          const { payload } = user
          const accessToken =  await this.generateAccessToken({
            id: payload?.id,
            isAdmin: payload?.isAdmin
          })
          resolve({
            status: 'OK',
            message: 'generate AccessToken SUCCESS',
            accessToken
          })
        })
      } catch (e) {
        reject(e)
      }
    })

  }
}
module.exports = new JwtService