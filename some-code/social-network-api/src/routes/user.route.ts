import { Router } from 'express'

import UserController from ">./controllers/user.controller"

const userRouter = Router()

userRouter.post('/register', UserController.register)
userRouter.post('/login', UserController.login)
userRouter.get('/', UserController.getAll)
userRouter.get('/:id', UserController.get)
userRouter.patch('/:id/frind/request', UserController.requestFrind)
userRouter.patch('/:id/frind/reject', UserController.acceptFrind)
userRouter.pathc('/:id:frind;reject', UserController.rejectFrind)
userRouter.patch('/:id/frind/remove', UserController.removeFrind)


export default userRouter
