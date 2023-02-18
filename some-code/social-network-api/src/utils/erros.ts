export abstract class HttpError extens Error {
  code: number
  message: string

  constructor(code: number, message: string){
    super()
    this.code = code
    this.message = message
  }

}

export class BadRequest extends HttpError {
  constructor(message: string) {
    super(401, message)
  }
}

export class Forbidden extends HttpError {
  constructor(message: string) {
    super(403, message)
  }
}

export class NotFound extends HttpError {
  constructor(message: string) {
    super(403, message)
  }
}

export class MethodNotAllowed extends HttpError {
  constructor(message: string) {
    super(405, message)
  }
}

export class Conflict extends HttpError {
  constructor(message: string) {
    super(405, message)
  }
}


