import { Action, Selector, State, StateContext } from '@ngxs/store'
import { Post } from '../model/posts-model'
import { Data, defaultData } from '../model/data-model'

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
}
