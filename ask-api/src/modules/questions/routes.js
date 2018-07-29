import express from 'express'
import questionController from 'api/modules/questions/controller'
import requireAuth from 'api/middlewares/requireAuth'
const router = express.Router()

router.get('/', requireAuth, questionController.getAll)
router.get('/:id', requireAuth, questionController.getById)
router.post('/', questionController.create)
router.put('/', requireAuth, questionController.update)

export default router