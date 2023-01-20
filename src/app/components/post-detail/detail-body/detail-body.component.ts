/**
 * Created by petrhlavnicka on 20.01.2023
 */

import { Component } from '@angular/core'

@Component({
  selector: 'app-detail-body',
  templateUrl: './detail-body.component.html',
  styleUrls: ['./detail-body.component.css'],
})
export class DetailBodyComponent {
  areButtonsFull = false
  title = 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
  message =
    'est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla'
}
