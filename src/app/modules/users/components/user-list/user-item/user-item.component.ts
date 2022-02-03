import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from '../../../models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() user: IUser;
  @Output() toggle= new EventEmitter<boolean>()

  constructor() {
  }

  ngOnInit(): void {
  }

  public isAdult(): boolean {
    return this.user.age >= 18;
  }

  public toggleUserActivity(): void {
    if (this.isAdult()) this.user.activated = !this.user.activated;
    this.toggle.emit(this.user.activated);
  }

  public disable(): void {
    if (this.isAdult()) this.user.activated = false;
  }
}
