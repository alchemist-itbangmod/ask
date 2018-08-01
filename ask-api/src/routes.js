import roomsRoutes from 'api/modules/rooms/routes'
import express from 'express'
import questionsRoutes from 'api/modules/questions/routes'
import usersRoutes from 'api/modules/users/routes'

const router = express.Router()

router.use('/rooms', roomsRoutes)
router.use('/questions', questionsRoutes)
router.use('/auth', usersRoutes)

export default router
