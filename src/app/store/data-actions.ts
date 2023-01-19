import { Post } from '../model/posts-model'
import { User } from '../model/users-model'

const statePrefix = '[DATA]'

export class AddData {
  static readonly type = statePrefix + 'Add'

  constructor(public payload: Post[]) {}
}

export class AddPosts {
  static readonly type = statePrefix + 'AddPosts'

  constructor(public payload: Post[]) {}
}

export class AddUsers {
  static readonly type = statePrefix + 'AddUsers'

  constructor(public payload: User[]) {}
}
