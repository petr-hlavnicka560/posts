/*
 * Created by petrh on 18.01.2023
 */

import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngxs/store'
import { ClearConfirmation } from '../../../store/data-actions'

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css'],
})
export class HomeHeaderComponent {
  constructor(private store: Store, private router: Router) {}

  navigateToNewPost() {
    this.router.navigateByUrl(`/post/0`)
    this.store.dispatch(new ClearConfirmation())
  }

  navigateToLogin() {
    this.router.navigateByUrl(`/login`)
  }
}
