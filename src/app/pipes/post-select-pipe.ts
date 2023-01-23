import { Pipe, PipeTransform } from '@angular/core'
import { Store } from '@ngxs/store'
import { DataState } from '../store/data-store'

@Pipe({ name: 'postSelect' })
export class PostSelectPipe implements PipeTransform {
  constructor(private store: Store) {}

  transform(
    posts:
      | {
          post: { id: number; userId: number; title: string; body: string }
          user: { companyName: string | undefined; name: string | undefined; website: string | undefined }
        }[]
      | null
  ) {
    const currentPage = this.store.selectSnapshot(DataState.selectCurrentPage)
    return posts?.filter((element, index) => index >= (currentPage - 1) * 10 && index <= 10 * currentPage - 1)
  }
}
