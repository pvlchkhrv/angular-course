import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {combineLatest, map, Observable, Subscription, switchMap} from 'rxjs';
import {FormArray, FormGroup} from '@angular/forms';
import {IUser} from '../../models/user.model';
import {UsersService} from '../../services/users.service';
import {MatDialog} from "@angular/material/dialog";

type FormType = 'userDetails' | 'addresses';

@Component({
  selector: 'app-edit-user-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.scss']
})
export class EditUserShellComponent implements OnInit, OnDestroy {
  public childFormNames: FormType[] = ['userDetails', 'addresses'];
  public editUserForm: FormGroup = new FormGroup({});
  public user$: Observable<IUser> = this.route.params.pipe(
    map(params => params['id']),
    switchMap(id => this.usersService.getUserById(id))
  )
  private id: string;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router,
    public modal: MatDialog) {

  }

  public ngOnInit(): void {
    this.user$ = this.usersService.getUserById(localStorage.getItem('id'))
    this.sub = this.user$
      .subscribe(user => {
        this.prefillFormGroup(user);
        this.firstNameAndLastNameCombined$.subscribe(values => this.patchEmailControl(values)
        );
      });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public onFormReady(formGroup: FormGroup | FormArray, formType): void {
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

  public isFormDirty(): boolean {
    return this.editUserForm.dirty;
  }

  // public openModal(): void {
  //   this.modal.open(ModalComponent, {
  //     data: this.modalData,
  //     width: '450px'
  //   }).afterClosed().subscribe(result => console.log('closed'));
  // }

  public onSubmit(): void {
    if (this.checkIsValid()) {
      this.usersService.editUser(this.mapFormDataToUser());
      this.router.navigate(['/users']);
    }
  }

  private get firstNameAndLastNameCombined$(): Observable<string[]> {
    return combineLatest([
        this.editUserForm.controls[this.childFormNames[0]].get('firstName').valueChanges,
        this.editUserForm.controls[this.childFormNames[0]].get('lastName').valueChanges
      ]
    )
  }

  private prefillFormGroup(user: IUser): void {
    const location = {
      addressLine: user.location.street.name,
      zip: user.location.postcode.toString()
    }
    const userDetails = {
      email: user.email,
      firstName: user.name.first,
      lastName: user.name.last,
      age: +user.dob.age,
      gender: user.gender

    }
    this.editUserForm.controls[this.childFormNames[0]].patchValue(userDetails);
    this.editUserForm.controls[this.childFormNames[1]].patchValue([location]);
  }

  private patchEmailControl(values: string[]): void {
    const [firstName, lastName] = values;
    const emailControl = this.editUserForm.controls[this.childFormNames[0]].get('email');

    emailControl.patchValue(`${firstName}${lastName}@gmail.com`);
  }

  private mapFormDataToUser(): IUser {
    return this.usersService.mapFormDataToUserInterface(this.editUserForm, this.id);
  }

}
