const express = require('express')
const router = express.Router()
const roomsRoutes = require('./modules/rooms/routes')
const questionsRoutes = require('./modules/questions/routes')
const cors = require('cors')

const corsOptions = {
  origin: '*',
}
express().use(cors(corsOptions))
router.use('/rooms', roomsRoutes)

router.use('/questions', questionsRoutes)

module.exports = router