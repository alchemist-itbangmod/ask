const express = require('express')
const router = express.Router()

const pinsRoutes = require('./modules/pins/routes')

router.get('/', (req, res) => {
  res.send('api')
})
router.use('/pin', pinsRoutes)

module.exports = router