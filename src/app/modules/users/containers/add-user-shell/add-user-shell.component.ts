import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {IUser} from "../../models/user.model";

@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.scss']
})
export class AddUserShellComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  public ngOnInit(): void {
  }

  public onAddUser(formGroup: FormGroup): void {
    // const addUserFormChildGroupsValues = Object.values(formGroup.value);
    // const user: unknown = addUserFormChildGroupsValues.reduce((userObj: {}, childFormGroupValue) => {
    //   return Object.assign(userObj, childFormGroupValue);
    // }, {} as IUser)

    const user: IUser = formGroup.controls['userDetails'].value;
    this.userService.addUser(user);
    this.router.navigate(['/users']);
  }
}
