/**
 * Created by petrhlavnicka on 20.01.2023
 */

import { Component } from '@angular/core'
import { Status } from '../../../helpers/post-detail-helpers'

@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.css'],
})
export class DetailHeaderComponent {
  statusEnum = Status
}
