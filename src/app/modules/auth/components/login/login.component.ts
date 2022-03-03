import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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

  ngOnInit(): void {
  }

}
