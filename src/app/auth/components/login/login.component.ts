import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() public loginFormReady = new EventEmitter<FormGroup>();

  public loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.min(3),
      Validators.max(15)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.min(6),
      Validators.max(15)
    ])
  });

  constructor() { }

  public ngOnInit(): void {
    this.loginFormReady.emit(this.loginForm);
  }

}
