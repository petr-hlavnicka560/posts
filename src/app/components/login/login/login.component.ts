/**
 * Created by petrhlavnicka on 23.01.2023
 */

import { Component } from '@angular/core'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngxs/store'
import { LocalService } from '../../../service/storageService'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  myForm: FormGroup
  loginName: AbstractControl
  invalidUserName = false

  constructor(private store: Store, fb: FormBuilder, private localStore: LocalService) {
    this.myForm = fb.group({
      loginName: [this.loginName, Validators.compose([Validators.required])],
    })
    this.loginName = this.myForm.controls['loginName']
  }

  onSubmit(value: { loginName: string }) {
    if (this.loginName.valid) {
      const key = `user_${value.loginName.toLowerCase()}`
      if (this.localStore.getData(key) === 'registered') {
        console.log('====== INSIDE LoginComponent onSubmit, Leanne user logged')
      } else {
        this.invalidUserName = true
      }
    }
  }

  clearInvalidUserName() {
    this.invalidUserName = false
  }
}
