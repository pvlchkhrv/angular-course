import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {takeWhile} from 'rxjs';

@Component({
  selector: 'app-user-addresses',
  templateUrl: './user-addresses.component.html',
  styleUrls: ['./user-addresses.component.scss']
})

export class UserAddressesComponent implements OnInit, OnDestroy {
  @Output() public onUserAddressesReady = new EventEmitter<FormArray>();
  public addresses: FormArray = new FormArray([]);
  private isComponentActive: boolean = true;

  public ngOnInit(): void {
    this.addresses.push(this.initAddressFormGroup());
    this.onUserAddressesReady.emit(this.addresses);
  }

  public ngOnDestroy(): void {
    this.isComponentActive = false;
  }

  private initAddressFormGroup(): FormGroup {
    const addressGroup = new FormGroup({
      addressLine: new FormControl('', Validators.required),
      city: new FormControl(''),
      zip: new FormControl({value: '', disabled: true})
    });
    this.configureZipControl(addressGroup);
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

  private configureZipControl(addressGroup: FormGroup): void {
    const cityControl = addressGroup.get('city');
    const zipControl = addressGroup.get('zip');

    cityControl.valueChanges
      .pipe(takeWhile(() => this.isComponentActive)).subscribe((value) => {
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
  }
}
