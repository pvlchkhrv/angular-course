import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {IUser} from '../../models/user.model';
import {UserItemComponent} from './user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: IUser[];
  @ViewChildren(UserItemComponent) cards: QueryList<UserItemComponent>;

  public isAllCardsShown: boolean;

  constructor() {
  }

  ngOnInit(): void {

  }

  public toggle(): void {
    this.isAllCardsShown = !this.isAllCardsShown;
  }

  public isDisabled(): boolean {
    return !this.users.some(user => !user.activated);
  }

  public changeUserActivityStatus(user, status): void {
    user.activated = status;
  }

  public disableUsers(): void {
    for (let card of this.cards) {
      card.disable();
    }
  }
}
