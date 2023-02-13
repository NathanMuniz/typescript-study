import http from 'http'
import app from './app'
import { PORT } from './config/secrets'
import { connectDatabase } from './config/database'


const server = http.createServer(app)

connectDatabase()

server.listen(PORT, () => {
  console.log(`sERVER TUNNIG O PORT ${port}`)
})


