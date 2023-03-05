import { Types, Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'
export interface IUser {
  firstName: string
  lastName: string
  email: string
  password: string
  image: string
  sessions: string[]
  friends: Types.ObjectId[]
  friendRequests: Types.ObjectId[]
  posts: Types.ObjectId[]
  sessions: string[]
}

export interface UserDocument extends IUser {
@@ -41, 11 + 41, 6 @@ const userSchema = new Schema({
  type: String,
  default: '',
},
  sessions: [
  {
    type: String,
  },
],
  friends: [
  {
    type: Schema.Types.ObjectId,
@@ -64, 6 + 59, 11 @@ const userSchema = new Schema({
      ref: 'Post',
    },
  ],
sessions: [
  {
    type: String,
  },
],
})

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next()
  const hashedPassword = await bcrypt.hash(this.password, 10)
  this.password = hashedPassword
  return next()
})
userSchema.methods.comparePassword = async function(password: string) {
  return await bcrypt.compare(password, this.password)
}
const UserModel = model<UserDocument>('User', userSchema)
export default UserModel
