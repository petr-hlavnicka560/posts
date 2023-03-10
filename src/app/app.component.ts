import { Component, OnInit } from '@angular/core'
import { Store } from '@ngxs/store'
import { ApiService } from './api/apiService'
import { AddPosts, AddUsers, Login, UpdatePaging } from './store/data-actions'
import { Post } from './model/posts-model'
import { User } from './model/users-model'
import { forkJoin } from 'rxjs'
import { updatePaging } from './helpers/paging-helpers'
import { LocalService } from './service/storageService'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'posts'
  newData: any

  constructor(private apiService: ApiService, private store: Store, private localStore: LocalService) {}

  ngOnInit() {
    this.localStore.saveData('user_leanne', 'registered')
    this.localStore.saveData('user_antonette', 'registered')
    forkJoin({
      posts: this.apiService.getData('https://jsonplaceholder.typicode.com/posts'),
      users: this.apiService.getData('https://jsonplaceholder.typicode.com/users'),
    }).subscribe((res) => {
      if (res.posts) {
        this.store.dispatch(new AddPosts(res.posts as Post[]))
        this.store.dispatch(new UpdatePaging(updatePaging((res.posts as Post[]).length, 1)))
      }
      if (res.users) {
        this.store.dispatch(new AddUsers(res.users as User[]))
        const loggedUserName = this.localStore.getData('loggedUser')
        if (loggedUserName) {
          this.store.dispatch(new Login(loggedUserName))
        }
      }
    })
  }
}
