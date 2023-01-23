import { Action, Selector, State, StateContext } from '@ngxs/store'
import { Data, Logged, defaultData } from '../model/data-model'
import {
  AddPosts,
  AddUsers,
  ClearConfirmation,
  DeletePost,
  Logout,
  NewPost,
  SetCurrentPage,
  UpdatePaging,
  UpdatePost,
} from './data-actions'
import { Post } from '../model/posts-model'
import { Confirmation } from '../helpers/posts-helpers'

export class DataModel {
  data: Data
}

@State<DataModel>({
  name: 'data',
  defaults: defaultData,
})
export class DataState {
  @Selector()
  static selectPostsRows(state: DataModel): {
    post: { id: number; title: string; body: string }
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
          id: post.id,
          title: post.title,
          body: post.body,
        },
      }
    })
  }

  @Selector()
  static selectPosts(state: DataModel): Post[] {
    return state.data.posts
  }

  @Selector()
  static selectCurrentPage(state: DataModel): number {
    return state.data.page.current
  }

  @Selector()
  static selectMaxPage(state: DataModel): number {
    return state.data.page.max
  }

  @Selector()
  static selectConfirmation(state: DataModel): Confirmation {
    return state.data.confirmation
  }

  @Selector()
  static selectLogged(state: DataModel): Logged {
    return state.data.logged
  }

  @Selector()
  static selectIsLogged(state: DataModel): boolean {
    return state.data.logged.isLogged
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

  @Action(UpdatePost)
  updatePost({ getState, setState }: StateContext<DataModel>, action: UpdatePost) {
    const stateCopy = { ...getState() }
    stateCopy.data.posts = stateCopy.data.posts.reduce((acc, val) => {
      // @ts-ignore
      acc.push(val.id === action.payload.id ? action.payload : val)
      return acc
    }, [])
    stateCopy.data.confirmation = Confirmation.Update
    setState(stateCopy)
  }

  @Action(NewPost)
  newPost({ getState, setState }: StateContext<DataModel>, action: NewPost) {
    const stateCopy = { ...getState() }
    stateCopy.data.posts = stateCopy.data.posts.reduce(
      (acc, val) => {
        acc.push({ ...val, id: val.id + 1 })
        return acc
      },
      [action.payload]
    )
    stateCopy.data.confirmation = Confirmation.New
    setState(stateCopy)
  }

  @Action(DeletePost)
  deletePost({ getState, setState }: StateContext<DataModel>, action: DeletePost) {
    const stateCopy = { ...getState() }
    stateCopy.data.posts = stateCopy.data.posts.reduce((acc, val) => {
      if (val.id < action.payload) {
        // @ts-ignore
        acc.push(val)
      }
      if (val.id > action.payload) {
        // @ts-ignore
        acc.push({ ...val, id: val.id - 1 })
      }

      return acc
    }, [])
    stateCopy.data.confirmation = Confirmation.Delete
    setState(stateCopy)
  }

  @Action(UpdatePaging)
  updatePaging({ getState, setState }: StateContext<DataModel>, action: UpdatePaging) {
    const stateCopy = { ...getState() }
    stateCopy.data.page = action.payload
    setState(stateCopy)
  }

  @Action(SetCurrentPage)
  SetCurrentPage({ getState, setState }: StateContext<DataModel>, action: SetCurrentPage) {
    const stateCopy = { ...getState() }
    stateCopy.data.page.current = action.payload
    setState(stateCopy)
  }

  @Action(ClearConfirmation)
  clearConfirmation({ getState, setState }: StateContext<DataModel>) {
    const stateCopy = { ...getState() }
    stateCopy.data.confirmation = Confirmation.None
    setState(stateCopy)
  }

  @Action(Logout)
  logout({ getState, setState }: StateContext<DataModel>) {
    const stateCopy = { ...getState() }
    stateCopy.data.logged = {
      isLogged: false,
      userId: 0,
      name: '',
    }
    setState(stateCopy)
  }
}
