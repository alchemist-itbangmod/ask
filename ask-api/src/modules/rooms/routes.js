import roomsController from 'api/modules/rooms/controller'
import express from 'express'
const router = express.Router()

router.get('/', roomsController.getAll)
router.post('/', roomsController.createRoom)
router.get('/pin/:pin', roomsController.getRoomByPin)
router.get('/:id', roomsController.getById)
router.put('/:id', roomsController.update)
router.delete('/:id', roomsController.delete)
export default router