import { Post } from './posts-model'
import { User } from './users-model'

export interface Data {
  posts: Post[]
  users: User[]

  page: Page
}

export const defaultData = {
  data: {
    posts: [],
    users: [],
    page: {
      current: 1,
      max: 1,
    },
  },
}

export interface Page {
  current: number
  max: number
}
