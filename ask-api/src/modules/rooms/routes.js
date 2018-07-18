const express = require('express')
const router = express.Router()
const roomsController = require('./controller')

router.get('/', roomsController.getAll)
router.post('/', roomsController.createRoom)
router.get('/:id', roomsController.getById)
router.put('/:id', roomsController.update)
router.delete('/:id', roomsController.delete)

module.exports = router