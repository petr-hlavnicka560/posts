/**
 * Created by petrhlavnicka on 20.01.2023
 */

import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngxs/store'
import { DataState } from '../../../store/data-store'
import { Post } from '../../../model/posts-model'

@Component({
  selector: 'app-detail-body',
  templateUrl: './detail-body.component.html',
  styleUrls: ['./detail-body.component.css'],
})
export class DetailBodyComponent {
  myForm: FormGroup
  id: number
  post: Post | undefined

  constructor(private store: Store, private route: ActivatedRoute, fb: FormBuilder) {
    route.params.subscribe((params) => (this.id = Number(params['id'])))
    this.post = this.store.selectSnapshot(DataState.selectPosts).find((post) => post.id === this.id)
    this.myForm = fb.group({ title: [this.post?.title], message: [this.post?.body] })
  }

  areButtonsFull = false

  onSubmit(value: { title: string; message: string }) {
    console.log('====== submitted value: ', value)
  }
}
