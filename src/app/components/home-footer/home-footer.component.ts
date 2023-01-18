/**
 * Created by petrhlavnicka on 18.01.2023
 */

import { Component } from '@angular/core'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.css'],
})
export class HomeFooterComponent {
  faCaretRight = faCaretRight
  faCaretLeft = faCaretLeft
}
