import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

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

  public setZipValidator(zipControl: FormControl): void {
    zipControl.setValidators(Validators.required);
    zipControl.updateValueAndValidity();
  }

  public cityControlFilled(cityControl: FormControl, zipControl: FormControl): boolean {
    if (!!cityControl.value) {
      this.setZipValidator(zipControl);
      return true
    }
    return false;
  }
}
