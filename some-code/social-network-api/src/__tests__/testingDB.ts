import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

let mongoTestServer: MongoMemoryServer


export const connectTestingDB = async () => {
  mongoTestServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoTestServer.getUri())
}


export const disconectTestaingDB = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.desconnect()
  await mongoTestServer.stop()
}
