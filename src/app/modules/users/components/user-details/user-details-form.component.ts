import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {FormValidationService} from '../../services/form-validation.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.scss']
})
export class UserDetailsFormComponent implements OnInit {
  @Output() onUserDetailsReady = new EventEmitter<FormGroup>();

  public userDetails: FormGroup;

  constructor(private formValidationService: FormValidationService) {
  }

  public ngOnInit(): void {
    this.userDetails = new FormGroup({
      id: new FormControl(+Date.now().toString()),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl(0, [Validators.required, Validators.min(15), Validators.max(100)]),
      company: new FormControl('', Validators.maxLength(35)),
      department: new FormControl('', Validators.minLength(6)),
      gender: new FormControl('', Validators.required),
      imgSrc: new FormControl(''),
      email: new FormControl('',
        [Validators.required, Validators.email, this.validateGmailEmail],
        [this.validateEmailAsync.bind(this)])
    });
    this.onUserDetailsReady.emit(this.userDetails);
  }

  public isControlInvalid(controlName: string): boolean {
    let control = this.userDetails.controls[controlName];
    let result = control.invalid && control.touched;
    return result;
  }

  public getControl(controlName: string) {
    return this.userDetails.get(controlName);
  }

  public onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.userDetails.patchValue({
        imgSrc: reader.result
      });
    };
  }

  private validateEmailAsync(control: FormControl): Observable<ValidationErrors> {
    return this.formValidationService.validateUniqueEmailAsync(control.value);
  }

  private validateGmailEmail(control: FormControl): ValidationErrors {
    const regEx = /@gmail.com/g;
    if (!regEx.test(control.value)) {
      return {invalidEmail: true} as ValidationErrors;
    }
    return null;
  }
}
