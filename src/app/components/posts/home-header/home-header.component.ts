/*
 * Created by petrh on 18.01.2023
 */

import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngxs/store'
import { ClearConfirmation, Logout } from '../../../store/data-actions'
import { Observable } from 'rxjs'
import { DataState } from '../../../store/data-store'

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css'],
})
export class HomeHeaderComponent implements OnInit {
  isLogged$: Observable<boolean>

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.isLogged$ = this.store.select(DataState.selectIsLogged)
  }

  selectInfoText(isLogged: boolean | null) {
    return isLogged ? `Welcome, ${this.store.selectSnapshot(DataState.selectLogged).name}!` : 'You are not logged in'
  }

  selectLogButtonName(isLogged: boolean | null) {
    return isLogged ? 'Log Out' : 'Log In'
  }

  navigateToNewPost() {
    this.router.navigateByUrl(`/post/0`)
    this.store.dispatch(new ClearConfirmation())
  }

  onLogPress() {
    if (!this.store.selectSnapshot(DataState.selectIsLogged)) {
      this.router.navigateByUrl(`/login`)
    } else {
      this.store.dispatch(new Logout())
    }
  }
}
