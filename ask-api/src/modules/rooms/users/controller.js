const usersModel = require('./model')

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await usersModel.getAllUsers()
    res.send(users)
  },
}