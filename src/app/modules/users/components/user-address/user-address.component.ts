import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.scss']
})
export class UserAddressComponent implements OnInit {
  @Input() public address: FormGroup;
  public cities: string [] = ['', 'Minsk', 'Gomel', 'Brest', 'Grodno', 'Vitebsk', 'Mogilev'];
  public errorMessages: string [] = ['Address is required!', 'ZIP is required!']
  constructor() { }

  ngOnInit(): void {
  }
}
