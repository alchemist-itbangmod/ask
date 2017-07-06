// IMPORT ROUTER.
const router = require('express').Router()

// IMPORT CONTROLLER
const QuestionController = require('./controllers/Questions.controller')

// --------------------------
// |  AUTHENTICATION ROUTE  |
// --------------------------
router.route('/auth/login').get()
router.route('/auth/logout').get()
router.route('/auth/register').get()

// --------------------------
// |      USERS ROUTE.      |
// --------------------------
router.route('/users').get()

// -- NESTED USERS ROUTE --
router.route('/users/:id/rooms').get()

// --------------------------
// |      ROOMS ROUTE.      |
// --------------------------
router.route('/rooms').get()
router.route('/rooms').post()
router.route('/rooms/:id').get()
router.route('/rooms/:id').put()
router.route('/rooms/code/:code').get()

// -- NESTED ROOMS ROUTE --
router.route('/rooms/:id/questions').get()

// --------------------------
// |    QUESTIONS ROUTE.    |
// --------------------------
router.route('/questions').get(QuestionController.getQuestions)
router.route('/questions/:id').get(QuestionController.getQuestion)
router.route('/questions/send').post(QuestionController.send)
router.route('/questions').delete(QuestionController.removeQuestion)

module.exports = router
