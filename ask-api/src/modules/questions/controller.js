const questionsModel = require('./model')
const _ = require('lodash')
module.exports = {
  getAll: (req, res) => {
    res.send(questionsModel.getAll())
  },
  getById: (req, res) => {
    const id = parseInt(req.params.id)
    res.send(questionsModel.getById(id))
  },
  updateQuestion: (req, res) => {
    const { name, } = req.body
    const { id, } = req.params
    if (!_.isEmpty(id) && !_.isEmpty()) {
      const index = _.findIndex(questionsModel, { id, })
      const newData = { id, name, }
      questionsModel[index] = newData
      return {
        status: 'success somthing blah blah',
        data: newData,
      }
    }
    return {
      status: 'error',
    }
  },
}