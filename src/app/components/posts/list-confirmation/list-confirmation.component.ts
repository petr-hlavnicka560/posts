/**
 * Created by petrhlavnicka on 22.01.2023
 */

import { Component, OnInit } from '@angular/core'
import { Confirmation } from '../../../helpers/posts-helpers'
import { Store } from '@ngxs/store'
import { DataState } from '../../../store/data-store'

@Component({
  selector: 'app-list-confirmation',
  templateUrl: './list-confirmation.component.html',
  styleUrls: ['./list-confirmation.component.css'],
})
export class ListConfirmationComponent implements OnInit {
  confirmation: Confirmation

  constructor(private store: Store) {}

  ngOnInit() {
    this.confirmation = this.store.selectSnapshot(DataState.selectConfirmation)
  }

  isConfirmation(confirmation: Confirmation) {
    return confirmation !== Confirmation.None
  }
}
