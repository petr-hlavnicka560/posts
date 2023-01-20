/**
 * Created by petrhlavnicka on 20.01.2023
 */

import { Component } from '@angular/core'
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngxs/store'
import { DataState } from '../../../store/data-store'
import { Post } from '../../../model/posts-model'
import { UpdatePost } from '../../../store/data-actions'

@Component({
  selector: 'app-detail-body',
  templateUrl: './detail-body.component.html',
  styleUrls: ['./detail-body.component.css'],
})
export class DetailBodyComponent {
  id: number
  post: Post | undefined
  areButtonsFull = false
  myForm: FormGroup
  title: AbstractControl
  body: AbstractControl

  constructor(private store: Store, private route: ActivatedRoute, fb: FormBuilder) {
    route.params.subscribe((params) => (this.id = Number(params['id'])))
    this.post = this.store.selectSnapshot(DataState.selectPosts).find((post) => post.id === this.id)
    this.myForm = fb.group({
      title: [this.post?.title, Validators.compose([Validators.required, titleLengthValidator])],
      body: [this.post?.body, Validators.required],
    })
    this.title = this.myForm.controls['title']
    this.body = this.myForm.controls['body']
  }

  onSubmit(value: { title: string; body: string }) {
    if (value.title.length <= 200) {
      this.store.dispatch(
        new UpdatePost({
          userId: this.post?.userId,
          id: this.id,
          title: value.title,
          body: value.body,
        })
      )
    }
  }
}

// @ts-ignore
function titleLengthValidator(control: FormControl): { [s: string]: boolean } {
  if (control.value && control.value && control.value.length > 200) {
    return { invalidTitleLength: true }
  }
}
