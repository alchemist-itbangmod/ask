const express = require('express')
const router = express.Router()

const questionsController = require('./controller')

router.get('/', questionsController.getQuestion)

module.exports = router
