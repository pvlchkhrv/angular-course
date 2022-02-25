import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {combineLatest, from, map, Observable, takeWhile} from 'rxjs';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import {IUser} from '../../models/user.model';
import {UsersService} from '../../services/users.service';

type FormType = 'userDetails' | 'addresses';

@Component({
  selector: 'app-edit-user-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.scss']
})
export class EditUserShellComponent implements OnInit, OnDestroy {
  public childFormNames: FormType[] = ['userDetails', 'addresses'];
  public editUserForm: FormGroup;
  public user$: Observable<IUser>;
  private id: number;
  private isComponentActive = true;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router) {
  }

  public ngOnInit(): void {
    this.editUserForm = new FormGroup({});

    this.route.params
      .pipe(takeWhile(() => this.isComponentActive))
      .subscribe(params => {
        this.id = +params['id'];

        this.user$ = this.usersService.getUserById(this.id);

        this.user$
          .pipe(takeWhile(() => this.isComponentActive))
          .subscribe(user => {
            this.prefillFormGroup(user);
            this.firstNameAndLastNameCombined$
              .pipe(takeWhile(() => this.isComponentActive))
              .subscribe(values => this.patchEmailControl(values)
            );
          });
      });
  }

  public ngOnDestroy(): void {
    this.isComponentActive = false;
  }

  public handleOnFormReady(formGroup: FormGroup | FormArray, formType): void {
    this.editUserForm.addControl(formType, formGroup);
  }

  public checkIsValid(): boolean {
    if (this.editUserForm.invalid) {
      this.editUserForm.markAllAsTouched();
      return false;
    } else {
      return true;
    }
  }

  public hasUnsavedData() {
    return this.editUserForm.dirty;
  }

  public get unsavedFields(): Observable<AbstractControl[]> | null{
    if (this.hasUnsavedData()) {
      this.editUserForm.valueChanges.pipe(
        map(parentForm => Object.values(parentForm.controls).filter(childForm => childForm)),

      )

      const dirtyChildGroups = Object.values(this.editUserForm.controls).filter(child => child.dirty);
      const dirtyControls = Object.values(dirtyChildGroups)
        .filter(control => control.dirty)
      console.log(dirtyControls)
    }
    return null;
  } // TODO:

  private mapFormDataToUserInterface(): IUser {
    const mappedUser = {...this.editUserForm.value.userDetails, addresses: this.editUserForm.value.addresses};
    return mappedUser;
  }

  public onEditUserClick(): void {
    // if (this.checkIsValid()) {
    //   this.usersService.editUser(this.mapFormDataToUserInterface());
    //   this.router.navigate(['/users']);
    // }
  }

  private get firstNameAndLastNameCombined$(): Observable<string[]> {
    // return this.editUserForm.controls[this.childFormNames[0]].get('firstName').valueChanges
    //   .pipe(
    //     mergeMap(firstNameValue =>
    //       this.editUserForm.controls[this.childFormNames[0]].get('lastName').valueChanges
    //         .pipe(map(lastNameValue => firstNameValue + lastNameValue))
    //     )
    //   )
    // return merge(
    //   this.editUserForm.controls[this.childFormNames[0]].get('firstName').valueChanges,
    //   this.editUserForm.controls[this.childFormNames[0]].get('lastName').valueChanges
    // )

    return combineLatest([
        this.editUserForm.controls[this.childFormNames[0]].get('firstName').valueChanges,
        this.editUserForm.controls[this.childFormNames[0]].get('lastName').valueChanges
      ]
    )

  }

  private prefillFormGroup(user: IUser): void {
    const {addresses, ...userDetails} = user;
    this.editUserForm.controls[this.childFormNames[0]].patchValue(userDetails);
    this.editUserForm.controls[this.childFormNames[1]].patchValue(addresses);
  }

  private patchEmailControl(values: string[]): void {
    const [firstName, lastName] = values;
    const emailControl = this.editUserForm.controls[this.childFormNames[0]].get('email');

    emailControl.patchValue(`${firstName}${lastName}@gmail.com`);
  }

}
