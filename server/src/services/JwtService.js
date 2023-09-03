const jwt = require('jsonwebtoken')

class JwtService {
  generateAccessToken(payload) {
    const accessToken = jwt.sign(
      { payload },
      'access_token',
      { expiresIn: '1h' },
    )

    return accessToken
  }

  generateRefreshToken(payload) {
    const refreshToken = jwt.sign(
      { payload },
      'refresh_token',
      { expiresIn: '365d' },
    )

    return refreshToken
  }
}
module.exports = new JwtService