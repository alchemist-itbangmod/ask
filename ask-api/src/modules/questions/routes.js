import express from 'express'
import questionController from 'api/modules/questions/controller'
const router = express.Router()

router.get('/', questionController.getAll)
router.get('/:id', questionController.getById)
router.post('/', questionController.create)
router.put('/', questionController.update)

export default router