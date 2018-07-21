import roomsRoutes from 'api/modules/rooms/routes'
import express from 'express'
import questionsRoutes from 'api/modules/questions/routes'

const router = express.Router()

router.use('/rooms', roomsRoutes)
router.use('/questions', questionsRoutes)

export default router