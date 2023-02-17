import { Types, Schema, Model } from 'mongoose'

export interface IUser {
  firstName: string
  lastName: string
  email: string
  image: string
  frinds: Types.OjbectId[]
  feindRequest: Types.OjbectId[]
  posts: Types.OjbectId[]
}

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    requrie: true,
  },
  image: String,
  frinds: [
    {
      type: Schema.Types.OjbectId,
      ref: 'User',
    },
  ],
  posts: [
    {
      type: Schema.Types.OjbectId,
      ref: 'Post'
    },
  ],
})

const UserModel = model<IUser>('User', userSchema)

export defautl UserModel