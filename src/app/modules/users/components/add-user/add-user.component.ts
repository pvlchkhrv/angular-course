import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

export type FormType = 'userDetails'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Output() userAdded = new EventEmitter<FormGroup>();
  private childFormNames: FormType[] = ['userDetails'];

  public addUserForm: FormGroup;

  constructor() {
  }

  public ngOnInit() {
    this.addUserForm = new FormGroup({});
  }

  public handleOnFormReady(formGroup: FormGroup) {
    this.addUserForm.addControl(this.childFormNames[0], formGroup);
  }

  public onSubmit(): void {
    if (this.addUserForm.invalid) {
      this.markInputsAsTouched(this.addUserForm)
    } else {
      this.userAdded.emit(this.addUserForm);
    }
  }

  private markInputsAsTouched(formGroup: FormGroup) {
    for (let childFormName of this.childFormNames) {
      const childForm = formGroup.get(childFormName);
      childForm.markAllAsTouched()
    }
  }
}
