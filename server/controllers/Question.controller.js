const mongoose = require('mongoose')

// IMPORT MODELS
const Question = require('../models/Qyestion.model')

// Question model
module.exports = {
  getAll: async (req, res) => {
    let allQuestion // To get all room in database

    // Getting all room in database
    allQuestion = await Question.getAll({})
      .then(data => data)
      .catch(err => err)
    res.json(allQuestion)
  }
} 
