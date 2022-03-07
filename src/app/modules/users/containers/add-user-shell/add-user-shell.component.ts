import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';
import {FormArray, FormGroup} from '@angular/forms';
import {IUser} from '../../models/user.model';
import {ICard} from "../../../shared/models/card.model";

type FormType = 'userDetails' | 'addresses';

@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.scss']
})
export class AddUserShellComponent implements OnInit {
  public childFormNames: FormType[] = ['userDetails', 'addresses'];
  public addUserForm: FormGroup;

  constructor(private userService: UsersService, private router: Router) {
  }

  public ngOnInit(): void {
    this.addUserForm = new FormGroup({});
  }

  public handleOnFormReady(formGroup: FormGroup | FormArray, formType): void {
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

  mapFormDataToUserCardInterface(): void{
    // return {...this.addUserForm.value.userDetails, addresses: this.addUserForm.value.addresses};
  }

  public onSubmit(): void {
    // if (this.checkIsValid()) {
    //   this.userService.addUser(this.mapFormDataToUserInterface());
    //   this.router.navigate(['/users']);
    // }
  }
}
