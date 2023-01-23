/**
 * Created by petrhlavnicka on 22.01.2023
 */

import { Component, OnInit } from '@angular/core'
import { Confirmation } from '../../../helpers/posts-helpers'
import { Store } from '@ngxs/store'
import { DataState } from '../../../store/data-store'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-list-confirmation',
  templateUrl: './list-confirmation.component.html',
  styleUrls: ['./list-confirmation.component.css'],
})
export class ListConfirmationComponent implements OnInit {
  confirmation$: Observable<Confirmation>

  constructor(private store: Store) {}

  ngOnInit() {
    this.confirmation$ = this.store.select(DataState.selectConfirmation)
  }

  isConfirmation(confirmation: Confirmation | null) {
    return !confirmation || confirmation !== Confirmation.None
  }
}
