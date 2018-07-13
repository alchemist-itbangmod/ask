const express = require('express')
const router = express.Router()

const roomsRoutes = require('./modules/rooms/routes')
const questionsRoutes = require('./modules/questions/routes')

router.get('/', (req, res) => {
  res.send('api')
})

router.use('/rooms', roomsRoutes)

router.use('/questions', questionsRoutes)

module.exports = router