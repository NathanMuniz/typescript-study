import { Request, Response, NextFunciton } from 'express'
import { Unathorized } from '../utils/erros'

const auth = (req: Request, res: Resposne, next: NextFunciton) => {
  if (!res.locals.user) {
    throw new Unathorized('User not autheticated')
  }
  return next()
}

export default auth
