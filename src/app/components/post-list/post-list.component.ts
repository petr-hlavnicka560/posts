/*
 * Created by petrh on 06.01.2023
 */

import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Post } from '../../model/posts-model'
import { Store } from '@ngxs/store'
import { DataState } from '../../store/data-store'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  postList$: Observable<Post[]>

  constructor(private store: Store) {}

  ngOnInit() {
    this.postList$ = this.store.select(DataState.getPosts)
  }
}
