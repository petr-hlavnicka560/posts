/**
 * Created by petrhlavnicka on 18.01.2023
 */

import { Component } from '@angular/core'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngxs/store'
import { AddCurrentPage } from '../../store/data-actions'
import { DataState } from '../../store/data-store'

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.css'],
})
export class HomeFooterComponent {
  faCaretRight = faCaretRight
  faCaretLeft = faCaretLeft

  constructor(private store: Store) {}

  onCaretRightClick(): void {
    const currentPage = this.store.selectSnapshot(DataState.getCurrentPage)
    const maxPage = this.store.selectSnapshot(DataState.getMaxPage)
    if (currentPage < maxPage) this.store.dispatch(new AddCurrentPage(currentPage + 1))
  }

  onCaretLeftClick(): void {
    const currentPage = this.store.selectSnapshot(DataState.getCurrentPage)
    if (currentPage > 1) this.store.dispatch(new AddCurrentPage(currentPage - 1))
  }

  caretRightDisabled(): boolean {
    const maxPage = this.store.selectSnapshot(DataState.getMaxPage)
    return this.store.selectSnapshot(DataState.getCurrentPage) === maxPage
  }

  caretLeftDisabled(): boolean {
    return this.store.selectSnapshot(DataState.getCurrentPage) === 1
  }
}
