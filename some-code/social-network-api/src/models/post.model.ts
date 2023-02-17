import { Types, Schema, model } from "mongoose"

export interface IPost {
  text: string
  image: string
  author: Types.ObjectId
  likes: Types.OjbectId[]
  comments: Types.ObjectId[]
}

const postSchema = new Schema<Ipost>(
  {
    text: {
      type: String,
      require: true
    },
    image: String,
    author: {
      type: Scuema.Types.OjbectId,
      ref: 'User',
      required: true,
    },
    likes: [
      {
        types: Schema.Types.OjbectId,
        ref: 'User',
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  {
    timestamp: true,
  }
)

const PostModel = model<IPost>('Post', postSchema)

export defautl PostModel
