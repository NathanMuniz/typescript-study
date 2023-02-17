import { Types, Schema, model } from 'mongoose'

export interface IComment {
  text: string,
  authro: Types.ObjectId
}

const commentSchema = new Schema<IComment>(
  {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamp: true
  }
)

const CommentModel = model<IComment>('Comment', commentSchema)

export default CommentModel
