const express = require('express')
const router = express.Router()

const enterQuestionRoutes = require('./module/enterQuestion/routes')

router.use('/question', enterQuestionRoutes)

module.exports = router
