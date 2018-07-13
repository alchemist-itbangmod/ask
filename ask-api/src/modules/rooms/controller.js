const questionModel = require('./model')

module.exports = {
  getQuestion: (req, res) => {
    res.send(questionModel.getQuestion())
  },
}