import exporess from 'express'

const app = express()

app.use(express.json())

app.use('/api/users', userRouter)

export default app


