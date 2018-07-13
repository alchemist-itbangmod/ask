const questionsModel = require('./model')
// const _ = require('lodash')
module.exports = {
  getAll: (req, res) => {
    res.send(questionsModel.getAll())
  },
  getById: (req, res) => {
    const id = parseInt(req.params.id)
    res.send(questionsModel.getById(id))
  },
  updateQuestion: (req, res) => {
    const name = req.body.name
    const id = req.params.id
    const update = questionsModel.update({ id, title: name, })
    res.send(update)
  },
}