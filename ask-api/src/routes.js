const express = require('express')
const router = express.Router()

const roomsRoutes = require('./modules/rooms/routes')

router.get('/', (req, res) => {
  res.send('api')
})

router.use('/rooms', roomsRoutes)

module.exports = router