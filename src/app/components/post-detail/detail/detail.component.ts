/**
 * Created by petrhlavnicka on 20.01.2023
 */

import { Component } from '@angular/core'
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Store } from '@ngxs/store'
import { DataState } from '../../../store/data-store'
import { Post } from '../../../model/posts-model'
import { DeletePost, NewPost, UpdatePaging, UpdatePost } from '../../../store/data-actions'
import { Status } from '../../../helpers/post-detail-helpers'
import { updatePaging } from '../../../helpers/paging-helpers'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  id: number
  post: Post | undefined
  statusEnum = Status
  pageTitle: string
  areButtonsFull: boolean
  myForm: FormGroup
  title: AbstractControl
  body: AbstractControl

  constructor(private store: Store, private route: ActivatedRoute, fb: FormBuilder, private router: Router) {
    route.params.subscribe((params) => (this.id = Number(params['id'])))
    if (this.id === 0) {
      this.pageTitle = this.statusEnum.New
      this.areButtonsFull = false
      this.post = this.generateNewPost(1)
    } else {
      this.pageTitle = this.statusEnum.Edit
      this.areButtonsFull = true
      this.post = this.store.selectSnapshot(DataState.selectPosts).find((post) => post.id === this.id)
    }
    this.myForm = fb.group({
      title: [this.post?.title, Validators.compose([Validators.required, titleLengthValidator])],
      body: [this.post?.body, Validators.required],
    })
    this.title = this.myForm.controls['title']
    this.body = this.myForm.controls['body']
  }

  onSubmit(value: { title: string; body: string }) {
    if (value.title.length <= 200) {
      if (this.id === 0) {
        this.store.dispatch(
          new NewPost({
            // @ts-ignore
            userId: this.post?.userId,
            id: 1,
            title: value.title,
            body: value.body,
          })
        )
        this.updatePagingAndNavigateHome(1)
      } else {
        this.store.dispatch(
          new UpdatePost({
            userId: this.post?.userId,
            id: this.id,
            title: value.title,
            body: value.body,
          })
        )
        this.router.navigateByUrl('/home')
      }
    }
  }

  onDelete(id: number) {
    this.store.dispatch(new DeletePost(id))
    this.updatePagingAndNavigateHome(this.id)
  }

  generateNewPost(userId: number) {
    return {
      userId,
      id: 1,
      title: '',
      body: '',
    }
  }

  updatePagingAndNavigateHome(index: number) {
    this.store.dispatch(new UpdatePaging(updatePaging(this.store.selectSnapshot(DataState.selectPosts).length, index)))
    this.router.navigateByUrl('/home')
  }

  onReturn() {
    this.router.navigateByUrl('/home')
  }
}

// @ts-ignore
function titleLengthValidator(control: FormControl): { [s: string]: boolean } {
  if (control.value && control.value && control.value.length > 200) {
    return { invalidTitleLength: true }
  }
}
