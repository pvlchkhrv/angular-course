import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-pass-group',
  templateUrl: './pass-group.component.html',
  styleUrls: ['./pass-group.component.scss']
})
export class PassGroupComponent implements OnInit {
  @Input() public parentGroup: FormGroup;
  public passGroup: FormGroup = this.formBuilder.group({
    password: new FormControl('', [Validators.required, Validators.min(6), Validators.max(15)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.min(6), Validators.max(15)])
  }, this.validatePasswordConfirmation);

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.parentGroup.setControl('passGroup', this.passGroup);
  }

  private validatePasswordConfirmation(control: AbstractControl): ValidationErrors | null {
    let pass = control.get('password');
    let confirmPass = control.get('confirmPassword');

    if (pass.pristine || confirmPass.pristine) {
      return null;
    }

    return pass.value === confirmPass.value ? null : {notMatch: true};
  }
}
