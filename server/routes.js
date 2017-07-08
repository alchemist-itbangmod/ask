// IMPORT ROUTER.
const router = require('express').Router()

// IMPORT CONTROLLER
const QuestionsController = require('./controllers/Questions.controller')
const RoomsController = require('./controllers/Rooms.controller')
const UsersController = require('./controllers/Users.controller')
const AuthController = require('./controllers/Authentication.controller')

// // --------------------------
// // |  AUTHENTICATION ROUTE  |
// // --------------------------
// router.route('/auth/login').get(AuthController.login)
// router.route('/auth/logout').get(AuthController.logout)
// router.route('/auth/register').get(AuthController.register)

// // --------------------------
// // |      USERS ROUTE.      |
// // --------------------------
// router.route('/user').get(UsersController.getCurrentUser)

// // -- NESTED USERS ROUTE --
// router.route('/users/:id/rooms').get(RoomsController.getRoomsByUserID)

// // --------------------------
// // |      ROOMS ROUTE.      |
// // --------------------------
router.route('/rooms').get(RoomsController.getAll)
router.route('/rooms').post(RoomsController.create)
// router.route('/rooms/:id').get(RoomsController.getRoomByID)
// router.route('/rooms/:id').put(RoomsController.updateRoomByID)
// router.route('/rooms/code/:code').get(RoomsController.getRoomByCode)

// // -- NESTED ROOMS ROUTE --
// router.route('/rooms/:id/questions').get(QuestionsController.getQuestionsByRoomID)

// // --------------------------
// // |    QUESTIONS ROUTE.    |
// // --------------------------
// router.route('/questions').get(QuestionsController.getQuestions)
// router.route('/questions/:id').get(QuestionsController.getQuestion)
// router.route('/questions/send').post(QuestionsController.send)
// router.route('/questions').delete(QuestionsController.removeQuestion)

module.exports = router
