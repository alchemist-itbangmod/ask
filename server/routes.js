// IMPORT ROUTER.
const router = require('express').Router()

// Import controller
const AuthController = require('./controllers/Authentication.controller')
const UserController = require('./controllers/User.controller')
const RoomController = require('./controllers/Room.controller')
const QuestionsController = require('./controllers/Question.controller')

// // --------------------------
// // |  AUTHENTICATION ROUTE  |
// // --------------------------
router.route('/auth/signup').post(AuthController.signup)
router.route('/auth/login').post(AuthController.login)
router.route('/auth/logout').get(AuthController.logout)
router.route('/auth/currentUser').get(AuthController.currentUser)

// // --------------------------
// // |      USER ROUTE.       |
// // --------------------------
router.route('users').get(UserController.getAll)
router.route('users/create').post(UserController.createUser)
router.route('users/:username').get(UserController.getUserByName)
router.route('users/:username').put(UserController.editUser)
router.route('users/:username').delete(UserController.deleteUser)

// // --------------------------
// // |      ROOMS ROUTE.      |
// // --------------------------
router.route('/rooms').get(RoomController.getAll)
router.route('/rooms/create').post(RoomController.create)
router.route('/rooms/:id').get(RoomController.getRoomByID)
router.route('/rooms/code/:code').get(RoomController.getRoomIDbyCode)
router.route('/rooms/:id').put(RoomController.updateRoomByID)
router.route('/rooms/:id/delete').post(RoomController.updateIsDelete)

// // --------------------------
// // |    QUESTIONS ROUTE.    |
// // --------------------------
router.route('/rooms/:id/questions').get(QuestionsController.getAll)
router.route('/questions/:id').get(QuestionsController.getQuestion)
router.route('/questions/:id').post(QuestionsController.createQuestion)
router.route('/questions/:id/del').put(QuestionsController.updateIsDelete)
router.route('/questions/:id/ans').put(QuestionsController.updateIsAns)

module.exports = router
