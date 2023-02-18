import exporess from 'express'
import errorHandler from "middlewareerrorHandler"


const app = express()

app.use(express.json())

app.use('/api/users', userRouter)

app.use(errorHandler)


export default app


