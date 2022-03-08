import {Component} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';
import {FormArray, FormGroup} from '@angular/forms';
import {IUser} from '../../models/user.model';
import {v4} from 'uuid';

type FormType = 'userDetails' | 'addresses';

@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.scss']
})
export class AddUserShellComponent {
  public childFormNames: FormType[] = ['userDetails', 'addresses'];
  public addUserForm: FormGroup = new FormGroup({});

  constructor(private userService: UsersService, private router: Router) {
  }

  public onFormReady(formGroup: FormGroup | FormArray, formType): void {
    this.addUserForm.addControl(formType, formGroup);
  }

  public checkIsValid(): boolean {
    if (this.addUserForm.invalid) {
      this.addUserForm.markAllAsTouched();
      return false;
    } else {
      return true;
    }
  }

  public mapFormDataToUser(): IUser {
    console.log(this.addUserForm.value)
    return this.userService.mapFormDataToUserInterface(this.addUserForm, v4());
  }

  public onSubmit(): void {
    if (this.checkIsValid()) {
      this.userService.addUser(this.mapFormDataToUser());
      this.router.navigate(['/users']);
    }
  }
}
