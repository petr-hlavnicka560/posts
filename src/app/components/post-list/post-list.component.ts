/*
 * Created by ab010in on 06.01.2023
 */

import { Component } from '@angular/core'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  // lunchList$: Observable<ILunch[]>

  postList = [
    { name: 'Petr', detail: 'First' },
    { name: 'Pavel', detail: 'Second' },
  ]
}
