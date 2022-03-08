import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {combineLatest, Observable, take, takeWhile} from 'rxjs';
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
  public editUserForm: FormGroup;
  public user$: Observable<IUser>;
  private id: string;
  private isComponentActive = true;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router,
    public modal: MatDialog) {
  }

  public ngOnInit(): void {
    this.editUserForm = new FormGroup({});

    this.route.params
      .pipe(take(1))
      .subscribe(params => {
        this.id = params['id'];

        this.user$ = this.usersService.getUserById(this.id);

        this.user$
          .pipe(takeWhile(() => this.isComponentActive))
          .subscribe(user => {
            this.prefillFormGroup(user);
            this.firstNameAndLastNameCombined$.subscribe(values => this.patchEmailControl(values)
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

  private mapFormDataToUserInterface(): IUser {
    const formData = this.editUserForm.value;
    return {
      "gender": formData.gender,
      "name": {
        "title": formData.gender === 'male' ? 'Mr.' : 'Mrs',
        "first": formData.firstName,
        "last": formData.lastName
      },
      "location": {
        "street": {
          "number": 0,
          "name": formData.addresses[0].addressLine,
        },
        "city": formData.addresses[0].city,
        "state": '',
        "country": '',
        "postcode": formData.addresses.zip,
        "coordinates": {
          "latitude": '',
          "longitude": ''
        },
        "timezone": {
          "offset": '',
          "description": ''
        }
      },
      "email": "brad.gibson@example.com",
      "dob": {
        "date": "1993-07-20T09:44:18.674Z",
        "age": 26
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "id": this.id
    }
    // const mappedUser = {...this.editUserForm.value.userDetails, addresses: this.editUserForm.value.addresses};
    // return mappedUser
  }

  public onEditUserClick(): void {
    // if (this.checkIsValid()) {
    //   this.usersService.editUser(this.mapFormDataToUserInterface());
    //   this.router.navigate(['/users']);
    // }
  }

  isFormDirty() {
   return this.editUserForm.dirty
  }

  // public openModal(): void {
  //   this.modal.open(ModalComponent, {
  //     data: this.modalData,
  //     width: '450px'
  //   }).afterClosed().subscribe(result => console.log('closed'));
  // }

  private get firstNameAndLastNameCombined$(): Observable<string[]> {
    return combineLatest([
        this.editUserForm.controls[this.childFormNames[0]].get('firstName').valueChanges,
        this.editUserForm.controls[this.childFormNames[0]].get('lastName').valueChanges
      ]
    )
  }

  private prefillFormGroup(user: IUser): void {
    const location = {
      addressLine: user.location.street,
      city: user.location.city,
      zip: user.location.postcode
    }
    const userDetails = {
      firstName: user.name.first,
      lastName: user.name.last,
    }
    this.editUserForm.controls[this.childFormNames[0]].patchValue(userDetails);
    this.editUserForm.controls[this.childFormNames[1]].patchValue([location]);
  }

  private patchEmailControl(values: string[]): void {
    const [firstName, lastName] = values;
    const emailControl = this.editUserForm.controls[this.childFormNames[0]].get('email');

    emailControl.patchValue(`${firstName}${lastName}@gmail.com`);
  }
}
