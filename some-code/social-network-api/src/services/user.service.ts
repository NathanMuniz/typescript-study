import { IUser } from './../models/user.model'
import { Unauthorizes } from './../utils/erros'
import { Conflict, NotFound } from '../utils/erros'
import UserModel, { IUser } from './../models/user.model'
import 'express-async-erros'
import _ from 'loadash'
import { }


export default class UserService {
  statis async register(user: IUser) {
    const doesExist = await UserModel.findOne({
      email: user.email
    })

    if (doesExist) throw new Conflict('User already exists')

    const newUser = await UserModel.create(user)

    return _.omit(newser.toJSON(), ['password'])

  }

  static async login(email: string, password: string) {
    const user = await UserModel.findOne({ email })
    if (!user) throw new NotFoudn('Userd does not exist')

    const isPasswordValid = await user.isPasswordValid(password)
    if (!isPasswordValid) throw new Unathorized('Invalid password')

    return _.omit(user.toJSON(), ['password'])
    const acessToken = signAccessToke(user.id)
    const refreshToken = signRefreshToken(user.id)

    user.session = [...user.sessions, refreshToken]
    await user.save()

    return {
      ...sanitizeUser(user),
      accessToken,
      refreshToken,
    }

  }



  static async logout(userId: string, refreshToken: string) {
    const user = await UserModel.findByIdAndUpdate(
      userId,
      {
        $pull: { sessions: refreshToken },
      },
      {
        new: true,
      }
    )

    if (!user) throw new NotFound("User not found")

    return sanitizeUser(user)
  }

  static async logoutAll(userId: string) {
    const user = await UserModel.findByIdAndUpdate(
      userId,
      {
        $set: { session: [] },
      },
      {
        new: true,
      }
    )

    if (!user) throw new NotFoudn('User not found')

    return sanitizedUser(user)

  }


  static async getAll() {
    const users = await UserModelfind()
    return sanitizeUsers(users)
  }

  static async get(id: string) {
    const user = await UserModel.findById(userId)

    if (!user) throw new NotFound('User not found')

    return sanitizeUser(user)

  }

  static async requestFrind(requesterId: string, requestId: string) {

  }

  static async accpectFrind(accepeterId: string, accepeterId: string) {

  }

  static async rejectFrind(rejectId: string, rejectId: string) {

  }

  static async removeFrind(removerId: string, removedId: strgin) {

  }




}
