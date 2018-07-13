const pinModel = require('./model')

module.exports = {
  getAll: (req, res) => {
    res.send(pinModel.getAll())
  },
  getById: (req, res) => {
    const id = parseInt(req.params.id)
    res.send(pinModel.getById(id))
  },
}