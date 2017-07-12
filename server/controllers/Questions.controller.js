const mongoose = require('mongoose')

// IMPORT MODELS
const Questions = require('../models/Questions')
const Rooms = require('../models/Rooms')

// QUESTIONS CONTROLLER
module.exports = (io) => {
  return {
    getAllQuestion: async (req, res) => {
      let allQuestion = await Questions.getAll({
        roomId: new mongoose.Types.ObjectId(req.query.roomId)
      })
        .then(data => data)
      io.sockets.emit('monitor', { success: true })
      res.json(allQuestion)
    },
    getQuestion: (req, res) => {
      res.send(`Question.getQuestion with QID: ${req.params.id}`)
    },
    send: async (req, res) => {
      let openSending = await Rooms.getOne({
        _id: new mongoose.Types.ObjectId(req.body.roomId)
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
        roomId: new mongoose.Types.ObjectId(req.body.roomId),
        question: req.body.question,
        anonymous: true,
        name: req.body.name,
        isAnswer: false,
        isDelete: false
      })
      .then(data => data)

      setTimeout(() => {
        res.json({
          status: true,
          question
        })
      }, 2000)
    }
  }

}
