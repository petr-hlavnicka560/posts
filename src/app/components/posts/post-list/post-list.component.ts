/*
 * Created by petrh on 06.01.2023
 */

import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store } from '@ngxs/store'
import { DataState } from '../../../store/data-store'
import { Router } from '@angular/router'
import { ClearConfirmation } from '../../../store/data-actions'
import { Logged } from '../../../model/data-model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  loggedUser$: Observable<Logged>
  postList$: Observable<
    {
      post: { id: number; userId: number; title: string; body: string }
      user: { companyName: string | undefined; name: string | undefined; website: string | undefined }
    }[]
  >

  constructor(private router: Router, private store: Store) {}

  ngOnInit() {
    this.postList$ = this.store.select(DataState.selectPostsRows)
    this.loggedUser$ = this.store.select(DataState.selectLogged)
  }

  isActiveTitle(userIdFromPost: number, loggedUser: Logged | null): boolean {
    return !loggedUser || loggedUser.userId === userIdFromPost
  }

  navigateToDetail(id: number, userIdFromPost: number) {
    const loggedUser = this.store.selectSnapshot(DataState.selectLogged)
    if (!loggedUser || loggedUser.userId === userIdFromPost) {
      this.router.navigateByUrl(`/post/${id.toString()}`)
      this.store.dispatch(new ClearConfirmation())
    }
  }
}
