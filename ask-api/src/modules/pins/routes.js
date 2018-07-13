const express = require('express')
const router = express.Router()

const pinRoomController = require('./controller')

router.get('/', pinRoomController.getAll)
router.get('/:id', pinRoomController.getById)
module.exports = router