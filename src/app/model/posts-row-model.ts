export interface PostsRow {
  user: UserDetail
  post: PostDetail
}

interface UserDetail {
  name: string
  companyName: string
  website: string
}

interface PostDetail {
  id: number
  title: string
  body: string
}
