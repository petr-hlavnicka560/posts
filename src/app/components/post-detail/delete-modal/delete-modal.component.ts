/**
 * Created by petrhlavnicka on 23.01.2023
 */

import { Component, Input, TemplateRef } from '@angular/core'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { DeletePost, UpdatePaging } from '../../../store/data-actions'
import { Store } from '@ngxs/store'
import { updatePaging } from '../../../helpers/paging-helpers'
import { DataState } from '../../../store/data-store'
import { Router } from '@angular/router'

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
})
export class DeleteModalComponent {
  modalRef?: BsModalRef
  @Input() postId: number

  constructor(private store: Store, private router: Router, private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' })
  }

  confirm(): void {
    this.store.dispatch(new DeletePost(this.postId))
    this.store.dispatch(
      new UpdatePaging(updatePaging(this.store.selectSnapshot(DataState.selectPosts).length, this.postId))
    )
    this.router.navigateByUrl('/home')
    this.modalRef?.hide()
  }

  decline(): void {
    this.modalRef?.hide()
  }
}
