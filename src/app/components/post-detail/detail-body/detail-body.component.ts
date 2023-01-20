/**
 * Created by petrhlavnicka on 20.01.2023
 */

import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-detail-body',
  templateUrl: './detail-body.component.html',
  styleUrls: ['./detail-body.component.css'],
})
export class DetailBodyComponent {
  myForm: FormGroup

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({ title: [this.titleContent], message: [this.messageContent] })
  }

  areButtonsFull = false

  onSubmit(value: { title: string; message: string }) {
    console.log('====== submitted value: ', value)
  }

  titleContent = 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
  messageContent =
    'est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla'
}
