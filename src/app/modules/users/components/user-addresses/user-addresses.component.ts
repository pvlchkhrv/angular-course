import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-addresses',
  templateUrl: './user-addresses.component.html',
  styleUrls: ['./user-addresses.component.scss']
})

export class UserAddressesComponent implements OnInit {
  @Output() public onUserAddressesReady = new EventEmitter<FormArray>();
  public addresses: FormArray = new FormArray([]);

  constructor() {
  }

  public ngOnInit(): void {
    this.addresses.push(this.initAddressFormGroup());
    this.onUserAddressesReady.emit(this.addresses);
  }

  private initAddressFormGroup() {
    const addressGroup =  new FormGroup({
      addressLine: new FormControl('', Validators.required),
      city: new FormControl(''),
      zip: new FormControl({value: '', disabled: true})
    });

    const cityControl = addressGroup.get('city');
    const zipControl = addressGroup.get('zip');

    cityControl.valueChanges.subscribe((value) => {
      if (value) {
        zipControl.setValidators(Validators.required);
        zipControl.enable();
        zipControl.updateValueAndValidity();
      } else {
        zipControl.clearValidators();
        zipControl.disable();
        zipControl.updateValueAndValidity();
      }
    });

    return addressGroup;
  }

  public addAddress(): void {
    this.addresses.push(this.initAddressFormGroup());
  }

  public removeAddress(index: number): void {
    this.addresses.removeAt(index);
  }

  public setDisableProp(addressesLength: number): boolean {
    return addressesLength === 1;
  }
}
