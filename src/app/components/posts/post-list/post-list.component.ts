/*
 * Created by petrh on 06.01.2023
 */

import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store } from '@ngxs/store'
import { DataState } from '../../../store/data-store'
import { Router } from '@angular/router'
import { ClearConfirmation } from '../../../store/data-actions'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  postList$: Observable<
    {
      post: { id: number; title: string; body: string }
      user: { companyName: string | undefined; name: string | undefined; website: string | undefined }
    }[]
  >

  constructor(private router: Router, private store: Store) {}

  ngOnInit() {
    this.postList$ = this.store.select(DataState.selectPostsRows)
  }

  navigateToDetail(id: number) {
    this.router.navigateByUrl(`/post/${id.toString()}`)
    this.store.dispatch(new ClearConfirmation())
  }
}
