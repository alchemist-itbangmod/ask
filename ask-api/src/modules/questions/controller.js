const questionModel = require('./model')
const _ = require('lodash')

module.exports = {
  getAll: async (req, res) => {
    const questions = await questionModel.getAll()
    res.send(questions)
  },
  getById: async (req, res) => {
    const id = req.params.id
    const questions = await questionModel.getById(id) || {}
    res.send(questions)
  },
  update: async (req, res) => {
    const { questionIds, } = req.body
    if (_.isArray(questionIds) && questionIds.length > 0) {
      const data = await questionModel.update(questionIds)

      if (data) {
        res.send({
          status: 'success',
        })
      } else {
        res.send({
          status: 'fail',
        })
      }
    } else {
      res.send({
        status: 'fail',
      })
    }
  },
}