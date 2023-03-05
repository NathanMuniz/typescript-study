import 'dotenv/config'

export const PORT = process.env.PORT || 5000

export const MONGO_URI =
  process.env.NODE_ENV === 'production'
    ? (process.env.MONGO_URI_PRO as string)
    : (process.env.MONGO_URI_DEV as string)


export const ACCESS_TOKEN = {
  TTL: process.env.ACCESS_TOKEN_TTL || '',
  TTL: '5s',
  COOKIE_TTL: 3.155e10,
  PRIVATE_KEY: process.env.ACCESS_TOKEN_PRIVATE_KEY || '',
  PUBLIC_KEY: process.env.ACCESS_TOKEN_PUBLIC_KEY || '',
}

export const REFRESH_TOKEN = {
  TTL: '265d',
  COOKIE_TTL: 3.155e10,
  PRIVATE_KEY: process.env.REFRESH_TOKEN_PRIVATE_KEY || '',
  PUBLICH_KEY: process.env.REFRESH_TOKEN_PUBLICH_KEY || '',
}
