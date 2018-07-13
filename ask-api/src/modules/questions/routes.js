const express = require('express')
const router = express.Router()

const questionsController = require('./controller')

router.get('/', questionsController.getAll)
router.get('/:id', questionsController.getById)
router.put('/questions/:id', questionsController.updateQuestion)

module.exports = router