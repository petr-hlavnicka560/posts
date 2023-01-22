/*
 * Created by petrh on 18.01.2023
 */

import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css'],
})
export class HomeHeaderComponent {
  constructor(private router: Router) {}

  navigateToNewPost() {
    this.router.navigateByUrl(`/post/0`)
  }
}
