const helloModel = require('./model')

module.exports = {
  getAll: (req, res) => {
    res.send(helloModel.getAll())
  },
  getById: (req, res) => {
    const id = parseInt(req.params.id)
    res.send(helloModel.getById(id))
  },
}