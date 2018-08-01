import roomsController from 'api/modules/rooms/controller'
import questionsController from 'api/modules/questions/controller'
import requireAuth from 'api/middlewares/requireAuth'
import analystController from './analy/controller'
import express from 'express'
const router = express.Router()

router.get('/', roomsController.getAll)
router.post('/', roomsController.createRoom)
router.get('/pin/:pin', roomsController.getRoomByPin)
router.get('/:id', roomsController.getById)
router.get('/:id/questions', requireAuth, questionsController.getByRoomId)
router.put('/:id', roomsController.update)
router.delete('/:id', roomsController.delete)
router.get('/:id/analyst', analystController.getQuestion)
router.get('/:id/analyst', analystController.getAsker)
export default router