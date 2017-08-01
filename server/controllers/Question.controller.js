const mongoose = require('mongoose')

// IMPORT MODELS
const Question = require('../models/Question.model')
const Room = require('../models/Room.model')

// Question model
module.exports = {
  getAll: async (req, res) => {
    let allQuestion // To get all question in database

    // Getting all room in database
    allQuestion = await Question.getAll({
      roomId: new mongoose.Types.ObjectId(req.params.id)
    })
      .then(data => data)

    if (allQuestion === null) {
      res.json({
        status: false,
        error: 'Fail to created'
      })
    } else {
      res.json({
        status: true,
        data: {
          allQuestion
        }
      })
    }
  },
  // Get only one question by question ID
  getQuestion: async (req, res) => {
    const questionId = req.params.id // ID of each-question
    let oneQuestion // Question that select

    oneQuestion = await Question.getOne({
      _id: new mongoose.Types.ObjectId(questionId)
    }).then(data => data)
      .catch(err => err)

    if (oneQuestion === null) {
      res.json({
        status: false,
        error: 'Fail to created'
      })
    } else {
      res.json({
        status: true,
        data: {
          oneQuestion
        }
      })
    }
  },
  createQuestion: async (req, res) => {
    let openSending = await Room.getOne({
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

    let result = await Question.create({
      roomId: req.body.roomId,
      question: req.body.question,
      name: req.body.name,
      anonymous: false
    })
      .then(data => data)
      .catch(err => err)
    if (result === null) {
      res.json({
        status: false,
        error: 'Fail to created'
      })
    } else {
      req.app.io.sockets
        .in(req.body.roomId)
        .emit('monitor', { status: 200, data: result })
      res.json({
        status: true,
        data: {
          result
        }
      })
    }
  },
  updateIsDelete: async (req, res) => {
    let result = await Question.update({
      _id: req.body._id,
      isDelete: true
    }).then(data => data)
    if (result === null) {
      res.json({
        status: false,
        error: 'Fail to update'
      })
    } else {
      res.json({
        status: true,
        message: 'Already delete'
      })
    }
  },
  updateIsAns: async (req, res) => {
    let questions = req.body.questions
    let result = []
    questions.map(async (q, index) => {
      result[index] = await Question.update({
        _id: q._id,
        isAnswer: true
      }).then(data => data)
    })
    if (result.find(r => r === null) > 0) {
      res.json({
        status: false,
        error: 'Fail to update'
      })
    } else {
      req.app.io.sockets
        .in(req.body.roomId)
        .emit('presentation', { status: 200, data: questions })
      res.json({
        status: true,
        message: 'Already answer'
      })
    }
  }
}
