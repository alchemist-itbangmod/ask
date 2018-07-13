const express = require('express')
const router = express.Router()

const enterQuestion = require('./controller')

router.post('/', enterQuestion.postQuestion)

module.exports = router