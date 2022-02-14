import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

export type FormType = 'userDetails' | 'addresses'

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {
  @Output() userAdded = new EventEmitter<FormGroup>();
  public childFormNames: FormType[] = ['userDetails', 'addresses'];

  public addUserForm: FormGroup;

  constructor() {
  }

  public ngOnInit() {
    this.addUserForm = new FormGroup({});
  }

  public handleOnFormReady(formGroup: FormGroup | FormArray, formType) {
    this.addUserForm.addControl(formType, formGroup);
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
