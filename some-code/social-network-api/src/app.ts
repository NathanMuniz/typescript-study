import exporess from 'express'
import errorHandler from "middlewareerrorHandler"
import cokieParser from 'cookie-parser'
import validateToken from './middlewares/validateToken'
import 'express-async-errors'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use('/api/users', userRouter)
app.use(validateToken)
app.use(errorHandler)


export default app


