const express = require('express')
const router = express.Router()

const questionsController = require('./controller')

router.get('/question', questionsController.getQuestion)
