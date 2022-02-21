import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, merge, Observable, Subscription, take} from 'rxjs';
import {FormArray, FormGroup} from "@angular/forms";
import {IUser} from "../../models/user.model";
import {UsersService} from "../../services/users.service";

type FormType = 'userDetails' | 'addresses';


@Component({
  selector: 'app-edit-user-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.scss']
})
export class EditUserShellComponent implements OnInit, OnDestroy {
  public childFormNames: FormType[] = ['userDetails', 'addresses'];
  public editUserForm: FormGroup;
  private id: number;
  private subscription: Subscription;
  user$: Observable<IUser>;


  constructor(private route: ActivatedRoute, private usersService: UsersService) {
    this.subscription = route.params.subscribe(params => this.id = +params['id']);
  }

  public ngOnInit(): void {
    this.editUserForm = new FormGroup({});

    this.user$ = this.usersService.getUserById(this.id);
    this.user$
      .pipe(
        take(1),
        map(user => ({
          userDetails: {
            id: user.id,
            firstName:  user.firstName,
            lastName: user.lastName,
            age: user.age,
            gender: user.gender,
            department: user.department,
            company: user.company,
            imgSrc: user.imgSrc,
            email: user.email
          },
          addresses: user.addresses
        }))
      ).subscribe(user => this.editUserForm.patchValue(user))

    // merge(
    //   this.editUserForm.controls['userDetails'].get('firstName').valueChanges,
    //   this.editUserForm.controls['userDetails'].valueChanges,
    // )
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public handleOnFormReady(formGroup: FormGroup | FormArray, formType): void {
    this.editUserForm.addControl(formType, formGroup);
  }
}
