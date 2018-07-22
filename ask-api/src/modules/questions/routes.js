const express = require('express')
const router = express.Router()
const questionController = require('./controller')

router.get('/', questionController.getAll)
router.get('/:id', questionController.getById)
router.put('/', questionController.update)

module.exports = router