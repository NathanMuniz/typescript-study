import { NextFunction, Request, Response } from 'express'
import { HttpError } from '../utils/erros'

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,

  next: NextFucntion
) => {
  if (err instanceof HttpError)
    return res.status(err.code).json({
      error: {
        code: err.code,
        message: err.message
      },
    })
  console.log(err)

  return res.status(500).json({
    error: {
      code: 500,
      message: 'Somehting wet wrong'
    },
  })
}

export default errorHandler
