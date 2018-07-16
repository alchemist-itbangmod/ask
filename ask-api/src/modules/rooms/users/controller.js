const usersModel = require('./model')

module.exports = {
  getAllUsers: (req, res) => {
    res.send(usersModel.getAllUsers())
  },
}