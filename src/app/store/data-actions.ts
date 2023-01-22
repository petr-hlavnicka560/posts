import { Post } from '../model/posts-model'
import { User } from '../model/users-model'
import { Page } from '../model/data-model'
import { Confirmation } from '../helpers/posts-helpers'

const statePrefix = '[DATA]'

export class AddData {
  static readonly type = statePrefix + 'Add'

  constructor(public payload: Post[]) {}
}

export class AddPosts {
  static readonly type = statePrefix + 'AddPosts'

  constructor(public payload: Post[]) {}
}

export class UpdatePost {
  static readonly type = statePrefix + 'UpdatePost'

  constructor(public payload: { id: number; title: string; body: string; userId: number | undefined }) {}
}

export class NewPost {
  static readonly type = statePrefix + 'NewPost'

  constructor(public payload: Post) {}
}

export class DeletePost {
  static readonly type = statePrefix + 'DeletePost'

  constructor(public payload: number) {}
}

export class AddUsers {
  static readonly type = statePrefix + 'AddUsers'

  constructor(public payload: User[]) {}
}

export class UpdatePaging {
  static readonly type = statePrefix + 'UpdatePaging'

  constructor(public payload: Page) {}
}

export class SetCurrentPage {
  static readonly type = statePrefix + 'SetCurrentPage'

  constructor(public payload: number) {}
}

export class ClearConfirmation {
  static readonly type = statePrefix + 'ClearConfirmation'

  constructor(public payload: Confirmation) {}
}
