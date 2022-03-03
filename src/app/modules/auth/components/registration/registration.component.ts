import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.min(3), Validators.max(15)]),
    passGroup: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.min(6), Validators.max(15)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.min(6), Validators.max(15)])
    }, this.validatePasswordConfirmation)
  });

  constructor() { }

  public ngOnInit(): void {

  }

  validatePasswordConfirmation(formGroup: FormGroup): ValidationErrors | null {
    let pass = formGroup.get('password').value;
    let confirmPass = formGroup.get('confirmPassword').value;
    return pass === confirmPass ? null : { notMatch: true };
  }

}
