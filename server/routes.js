// IMPORT ROUTER.
const router = require('express').Router()

// Import controller
const RoomController = require('./controllers/Room.controller')

// Test function
const testRouter = (req, res) => {
  res.json({
    name: 'abc',
    sucess: true
  })
}

// // --------------------------
// // |  AUTHENTICATION ROUTE  |
// // --------------------------
//router.route('/auth/login').get(AuthController.login)
//router.route('/auth/logout').get(AuthController.logout)

// // --------------------------
// // |      ROOMS ROUTE.      |
// // --------------------------
router.route('/rooms').get(RoomController.getAll)
router.route('/rooms/create').post(RoomController.create)
router.route('/rooms/:id').get(RoomController.getRoomByID)
router.route('/rooms/code/:code').get(RoomController.getRoomIDbyCode)
router.route('/rooms/:id').put(RoomController.updateRoomByID)
// router.route('/rooms/:id/delete').post(RoomController.updateIsDelete)

module.exports = router
