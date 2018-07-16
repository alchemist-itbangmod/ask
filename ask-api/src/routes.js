const express = require('express')
const router = express.Router()

const roomsRoutes = require('./modules/rooms/analy/controller')
const userRoutes = require('./modules/rooms/users/controller')

router.get('/', (req, res) => {
  res.send('api')
})

router.use('/rooms/:id/analy', roomsRoutes.getQuestion)
router.use('/rooms/:id/users', userRoutes.getAllUsers)

module.exports = router