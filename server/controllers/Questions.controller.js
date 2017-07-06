// IMPORT MODELS
const Questions = require('../models/Questions')

module.exports = {
  getQuestions: (req, res) => {
    res.send('Question.getQuestions')
  },
  getQuestion: (req, res) => {
    res.send(`Question.getQuestion with QID: ${req.params.id}`)
  },
  send: (req, res) => {
    res.send('Question.send')
  }
}
