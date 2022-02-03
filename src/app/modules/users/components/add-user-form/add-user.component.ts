import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IUser} from '../../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit   {
  @Output() clickAddUser = new EventEmitter<IUser>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addUserGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    age: new FormControl(),
    company: new FormControl(),
    department: new FormControl(),
    sex: new FormControl()
  })

  onAddClick() {
    const user = this.addUserGroup.value;
    user.activated = true;
    this.clickAddUser.emit(user);
    this.router.navigate(['/users']);
  }
}
