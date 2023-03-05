import dotenv from 'dotenv'


dotenv.config()

export const PORT = process.env.PORT || 50000

export const MONGO_URI = process.env.NODE_ENV === 'production'
  ? (process.env.MONGO_URI_PROD as string)
  : (process.env.MONGO_URI_DEV as string)

export const ACESS_TOKEN {
  TTl: process.env.ACCESS_TOKEN_TTL || '',
    PRIVATE_KEY: process.env.ACCESS_TOKEN_PRIVATE_KEY || '',
      PUBLIC_KEY: process.env.ACCESS_TOKEN_PUBLIC_KEY || '',
}

export const REFRESH_TOKEN = {
  TTL: process.env.REFRESH_TOKEN_TTL || '',
  PRIVATE_KEY: process.env.REFRESH_TOKEN_PRIVATE_KEY || '',
  PUBLIC_KEY: process.env.REFRESH_TOKEN_PUBLIC_KEY '',
}
