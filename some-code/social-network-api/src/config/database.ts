import mongoose from 'mongoose'
import { MONGO_URI } from './secrets'

export const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('Conneted to DB')
  } catch (e) {
    console.log(e)
  }
}
