import { IPost } from "../Post/Post.types";


export interface Icoment extends Pick<IPost, 'username' | 'content'> {
  id?: number;
  postId?: number;
}
