import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {IUser} from '../../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Output() onAddUserClick = new EventEmitter<IUser>();

  public addUserForm: FormGroup;

  constructor() {
  }

  public ngOnInit() {
    this.addUserForm = new FormGroup({});
  }

  public handleOnFormReady(formGroup: FormGroup) {
    this.addUserForm.addControl('userDetails', formGroup);
  }

  public onSubmit(): void {
    console.log(this.addUserForm)
  }
}
