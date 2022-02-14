import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-user-address-form',
  templateUrl: './user-address-form.component.html',
  styleUrls: ['./user-address-form.component.scss']
})
export class UserAddressFormComponent implements OnInit {
  @Output() public onUserAddressesFormReady = new EventEmitter<FormArray>();
  public cities: string [] = ['Minsk', 'Gomel', 'Brest', 'Grodno', 'Vitebsk', 'Mogilev'];
  public addresses: FormArray = new FormArray([]);
  public errorMessages: string [] = ['Address is required!', 'ZIP is required!']

  constructor() {
  }

  public ngOnInit(): void {
    this.addresses.push(this.initAddressFormGroup());
    this.onUserAddressesFormReady.emit(this.addresses);
    console.log(this.addresses.value)
  }

  private initAddressFormGroup() {
    return new FormGroup({
      addressLine: new FormControl('', Validators.required),
      city: new FormControl(''),
      zip: new FormControl('')
    });
  }

  public addAddress() {
    this.addresses.push(this.initAddressFormGroup());
  }

  public removeAddress(index: number) {
    this.addresses.removeAt(index);
  }

  public isCityFilled(array: FormArray): ValidationErrors {
    const groups = array.value;
    const error: string = ''
    for (let group of groups) {
      return !group.city && ({
        cityError: this.errorMessages[1]
      })
    }
    return null;
  }
}
