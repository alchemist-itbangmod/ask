const enterQuestionModel = require('./model')

module.exports = {
  postQuestion: (req, res) => {
    console.log(req)
    let data = enterQuestionModel.postQuestion()
    if (data) {
      res.status(200).send({ status: 'success' })
      return
    }
    res.status(400).send({ status: 'failed' })
  },
}