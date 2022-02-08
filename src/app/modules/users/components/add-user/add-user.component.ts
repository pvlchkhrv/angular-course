import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IUser} from '../../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit   {
  @Output() onAddUserClick = new EventEmitter<IUser>();
  constructor() { }

  ngOnInit(): void {
  }

  public addUserGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [Validators.required, Validators.min(10)]),
    company: new FormControl('', [Validators.required, Validators.minLength(3)]),
    department: new FormControl('', [Validators.required, Validators.minLength(3)]),
    gender: new FormControl(),
    imgSrc: new FormControl(''),
  });

  public onFileChange(event): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.addUserGroup.patchValue({
        imgSrc: reader.result
      });
    };
  }

  public handleOnAddUserClick(): void {
    const user = this.addUserGroup.value;
    user.activated = true;
    this.onAddUserClick.emit(user);
  }
}
