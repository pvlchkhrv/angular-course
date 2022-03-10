import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @Input() public parentForm: FormGroup;
  public userNameControl = new FormControl('', [Validators.required]);

  constructor() { }

  public ngOnInit(): void {
    this.parentForm.setControl('userName',this.userNameControl);
  }

  public validatePasswordConfirmation(formGroup: FormGroup): ValidationErrors | null {
    let pass = formGroup.get('password').value;
    let confirmPass = formGroup.get('confirmPassword').value;
    return pass === confirmPass ? null : { notMatch: true };
  }

}
