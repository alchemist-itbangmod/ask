// IMPORT MODELS
const Questions = require('../models/Questions')
const Rooms = require('../models/Rooms')

// QUESTIONS CONTROLLER
module.exports = {
  getAllQuestions: (req, res) => {
    res.send('Question.getQuestions')
  },
  getQuestion: (req, res) => {
    res.send(`Question.getQuestion with QID: ${req.params.id}`)
  },
  send: async (req, res) => {
    let openSending = await Rooms.getOne({
      _id: req.body.roomId
    }).then(data => data.openSending)

    if (!openSending) {
      res.json({
        status: false,
        info: 'closed to Sending.'
      })
      // break Command
      return
    }

    let question = await Questions.create({
      roomId: req.body.roomId,
      question: req.body.question,
      anonymous: true,
      name: req.body.name,
      isAnswer: false,
      isDelete: false
    })
    .then(data => data)

    console.log(question)

    setTimeout(() => {
      res.json({
        status: true,
        question
      })
    }, 2000)
  }
}
