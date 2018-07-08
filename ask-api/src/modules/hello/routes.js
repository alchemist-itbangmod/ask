const express = require('express')
const router = express.Router()

const helloController = require('./controller')

// hello routes
router.get('/', helloController.getAll)
router.get('/:id', helloController.getById)

module.exports = router