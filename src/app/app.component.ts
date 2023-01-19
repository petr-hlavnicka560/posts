import { Component, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'
import { ApiService } from './api/apiService'
import { AddPosts, AddUsers } from './store/data-actions'
import { Post } from './model/posts-model'
import { User } from './model/users-model'
import { forkJoin } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'posts'
  newData: any

  constructor(private apiService: ApiService, private store: Store) {}

  ngOnInit() {
    forkJoin({
      posts: this.apiService.getData('https://jsonplaceholder.typicode.com/posts'),
      users: this.apiService.getData('https://jsonplaceholder.typicode.com/users'),
    }).subscribe((res) => {
      if (res.posts) {
        this.store.dispatch(new AddPosts(res.posts as Post[]))
      }
      if (res.users) {
        this.store.dispatch(new AddUsers(res.users as User[]))
      }
    })
  }
}
