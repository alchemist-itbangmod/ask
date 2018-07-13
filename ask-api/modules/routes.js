const express = require('express')
const router = express.Router()

const pinRoomController = require('./controller')

router.get('/pin', pinRoomController.getpin)

module.exports = router