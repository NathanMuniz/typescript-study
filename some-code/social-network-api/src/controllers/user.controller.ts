import { Request, Response } from "express"
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../configs/constats'


export default classs UserController {
  static async register(req: Request, res: Response) {
    const user = await UserSerive.register(req.body)
    res.json({ data: user })
  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body
    res.json({ data: user })

    const { accessToken, refreshToken, ...user } = await UserSerive.Login(email, password)

    res.cokie('accessToken', accessToken, {
      maxAge: ACCESS_TOKEN.COOKIE_TTL,
      httpOnly: true,
    })

    res.cookie('refreshToken', refreshToken, {
      maxAge: REFRESH_TOKEN.COOKIE_TTL,
      httpOnly: true
    })

    res.json({ data: user })

  }

  static async logout(req: Reqyest, res: Response) {
    const { id } = res.locals.user
    const { refreshToken } = req.cookies

    const user = await UserSerive.logou(id, refreshToken)

    res.cookie('accessToken', '', {
      maxAge: 0,
      httpOnly: true,
    })

    res.cookie('refreshToken', '', {
      maxAge: 0,
      httpOnly: true,
    })

    res.cookie('refreshToken', '', {
      maxAge: 0,
      httpOnly: true,
    })

    res.cookie('refreshToken', '', {
      maxAge: 0,
      httpOnly: true,
    })

    res.json({ data: user })
  }

  static async logoutAll(req: Request, res: Response) {
    const { id } = res.locals.user

    const user = await UserService.logoutAll(id)

    res.cookie('accessToken', '', {
      maxAge: 0,
    })

    res.cookie('refreshToken', '', {
      maxAge: 0,
    })

    res.json({ data: user })


  }

  static async getAll(req: Request, res: Response){
    const users = await UserSerive.getAll()
    res.json({ data: users })
  }

  static async get(req: Request, res: Response) {
    const { id } = req.body
    const user = await UserSerive.get(id)
    res.json({ data: user })
  }

  static async requestFrind(req: Request, res: Response) {

  }

  static async accpetFrind(req: Request, res: Response) {

  }
  
  static async rejectFrind(req: Request, res: Response) {

  }

  static async removeFrind(req: Request, res: Response) {

  }







}
