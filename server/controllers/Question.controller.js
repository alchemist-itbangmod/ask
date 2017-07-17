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
    res.json(allQuestion)
  },
  // Get only one question by question ID
  getQuestion: async (req, res) => {
    const questionId = req.params.id
    let oneQuestion // Question that select

    oneQuestion = await Question.getOne({
      _id: new mongoose.Types.ObjectId(questionId)
    }).then(data => data)

    res.json(oneQuestion)
  },
  createQuestion: async (req, res) => {
    let result = await Question.create({
      roomId: req.body.roomId,
      question: req.body.question,
      name: req.body.name,
      anonymous: req.body.anonymous
    })
      .then(data => data)
      .catch(err => err)
    res.json(result)
  }
}
