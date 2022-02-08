import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {

  public addUserGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required, Validators.min(15), Validators.max(100)]),
    company: new FormControl('', [Validators.required, Validators.minLength(35)]),
    department: new FormControl('', [Validators.required, Validators.minLength(6)]),
    gender: new FormControl('', Validators.required),
    imgSrc: new FormControl(''),
    email: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

}
