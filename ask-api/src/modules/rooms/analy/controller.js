const questionModel = require('./model')

module.exports = {
  getQuestion: async (req, res) => {
    const questions = await questionModel.getQuestion()
    res.send(questions)
  },
}