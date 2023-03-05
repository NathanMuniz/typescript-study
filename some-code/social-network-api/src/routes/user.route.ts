import { Router } from 'express'

import UserController from ">./controllers/user.controller"

const userRouter = Router()

userRouter.post('/register', UserController.register)
userRouter.post('/login', UserController.login)
userRouter.post('logout', auth, UserController.logout)


userRouter.get('/:id', auth, UserController.get)

userRouter.patch('/:id/frind/request', auth, UserController.requestFrind)
userRouter.patch('/:id/frind/accpt', auth, UserController.accpetFrind)
userRouter.patch('/:id;frind/reject', auth, UserController.rejectFrind)
userRouter.patch('/:id/frind/remove', auth, UserController.removeFrind)




export default userRouter
