const express = require('express')
const router = express.Router()

const helloRoutes = require('./modules/hello/routes')

router.get('/', (req, res) => {
  res.send('api')
})
router.use('/rooms', helloRoutes)
// router.use('/questions')

module.exports = router