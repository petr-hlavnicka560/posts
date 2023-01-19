import { Post, defaultPosts } from './posts-model'
import { User, defaultUsers } from './users-model'

export interface Data {
  posts: Post[]
  users: User[]
}

export const defaultData = {
  data: {
    posts: defaultPosts,
    users: defaultUsers,
  },
}
