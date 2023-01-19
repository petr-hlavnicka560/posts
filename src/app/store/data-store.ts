import { Action, Selector, State, StateContext } from '@ngxs/store'
import { Post } from '../model/posts-model'
import { Data, defaultData } from '../model/data-model'
import { AddPosts, AddUsers } from './data-actions'

export class DataModel {
  data: Data
}

@State<DataModel>({
  name: 'data',
  defaults: defaultData,
})
export class DataState {
  @Selector()
  static getPosts(state: DataModel): Post[] {
    return state.data.posts
  }

  @Selector()
  static getPostsRows(state: DataModel): {
    post: { title: string; body: string }
    user: { companyName: string | undefined; name: string | undefined; website: string | undefined }
  }[] {
    return state.data.posts.map((post) => {
      const user = state.data.users.find((user) => user.id === post.userId)
      return {
        user: {
          name: user?.name,
          companyName: user?.company.name,
          website: user?.website,
        },
        post: {
          title: post.title,
          body: post.body,
        },
      }
    })
  }

  @Action(AddPosts)
  addPosts({ getState, setState }: StateContext<DataModel>, action: AddPosts) {
    const stateCopy = { ...getState() }
    stateCopy.data.posts = []
    action.payload.forEach((post) => stateCopy.data.posts.push(post))
    setState(stateCopy)
  }

  @Action(AddUsers)
  addUsers({ getState, setState }: StateContext<DataModel>, action: AddUsers) {
    const stateCopy = { ...getState() }
    stateCopy.data.users = []
    action.payload.forEach((user) => stateCopy.data.users.push(user))
    setState(stateCopy)
  }
}
