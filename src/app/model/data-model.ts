import { Post } from './posts-model'
import { User } from './users-model'
import { Confirmation } from '../helpers/posts-helpers'

export interface Data {
  posts: Post[]
  users: User[]

  page: Page

  confirmation: Confirmation
}

export const defaultData = {
  data: {
    posts: [],
    users: [],
    page: {
      current: 1,
      max: 1,
    },
    confirmation: Confirmation.None,
  },
}

export interface Page {
  current: number
  max: number
}
