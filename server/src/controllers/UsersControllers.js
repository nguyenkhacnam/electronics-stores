
class UsersControllers {
  index(req, res) {
    res.send('Hello world')
  }
}

module.exports = new UsersControllers