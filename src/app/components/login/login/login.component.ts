/**
 * Created by petrhlavnicka on 23.01.2023
 */

import { Component } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngxs/store'
import { LocalService } from '../../../service/storageService'
import { Login } from '../../../store/data-actions'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  myForm: FormGroup
  loginName: AbstractControl
  invalidUserName = false

  constructor(private store: Store, fb: FormBuilder, private localStore: LocalService, private router: Router) {
    this.myForm = fb.group({
      loginName: [this.loginName, Validators.required],
    })
    this.loginName = this.myForm.controls['loginName']
  }

  onSubmit(value: { loginName: string }) {
    if (this.loginName.valid) {
      const name = value.loginName.toLowerCase()
      const key = `user_${name}`
      if (this.localStore.getData(key) === 'registered') {
        this.store.dispatch(new Login(name))
        this.localStore.saveData('loggedUser', name)
        this.router.navigateByUrl('/home')
      } else {
        this.invalidUserName = true
      }
    }
  }

  clearInvalidUserName() {
    this.invalidUserName = false
  }
}
