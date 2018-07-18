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
    const id = req.params.id
    const name = req.body
    if (_.isString(name)) {
      const data = await questionModel.update({
        questionId: id,
        name,
      })
      console.log('data', data)
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