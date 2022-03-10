import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-registration-shell',
  templateUrl: './registration-shell.component.html',
  styleUrls: ['./registration-shell.component.scss']
})
export class RegistrationShellComponent implements OnInit {
  public registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
  }

  public ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      userName: new FormControl(''),
      passGroup: new FormGroup({}),
    });

    // this.registrationForm.valueChanges.subscribe(value => console.log(value))
  }

  private checkFormValidity(): boolean {
    if (this.registrationForm.valid) {
      return true;
    } else {
      this.registrationForm.markAllAsTouched();
      return false;
    }
  }

  public onSubmit() {
    const {userName, passGroup} = this.registrationForm.value;
    if (this.checkFormValidity()) {
      this.authService.register(userName, passGroup.password)
    }
  }

}
