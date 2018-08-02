import roomsController from 'api/modules/rooms/controller'
import questionsController from 'api/modules/questions/controller'
import requireAuth from 'api/middlewares/requireAuth'
import express from 'express'
const router = express.Router()

router.get('/', requireAuth, roomsController.getAll)
router.post('/', requireAuth, roomsController.createRoom)
router.get('/pin/:pin', roomsController.getRoomByPin)
router.get('/:id', roomsController.getById)
router.get('/:id/questions', requireAuth, questionsController.getByRoomId)
router.put('/:id', roomsController.update)
router.delete('/:id', roomsController.delete)
export default router