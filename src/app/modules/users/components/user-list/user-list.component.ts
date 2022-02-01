import {Component, Input, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {IUser} from '../../models/IUser';
import {UserItemComponent} from './user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: IUser[];
  @ViewChildren(UserItemComponent) cards: UserItemComponent[];

  public isAllCardsShown: boolean;
  constructor() { }

  ngOnInit(): void {

  }

  public toggle() {
    this.isAllCardsShown = !this.isAllCardsShown;
  }

  public isDisabled() {
    return !this.users.some(user => !user.activated);
  }

  changeUserActivityStatus(user, status) {
    user.activated = status;
  }

  public toggleAllUsersActivity() {
    for(let card of this.cards) {
      card.disable();
    }
  }
}
