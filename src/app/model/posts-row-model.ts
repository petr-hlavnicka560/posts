export interface PostsRow {
  user: UserDetail
  post: PostDetail
}

interface UserDetail {
  name: string
  companyName: string
}

interface PostDetail {
  title: string
  body: string
}
