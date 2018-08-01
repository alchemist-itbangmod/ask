import express from 'express'
import userController from 'api/modules/users/controller'
const router = express.Router()

router.post('/facebook', userController.facebookLogin)
router.get('/logout', userController.logout)

export default router
