import {Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {IUser} from '../../models/user.model';
import {UserItemComponent} from './user-item/user-item.component';
import {ICard} from '../../../shared/models/card.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: IUser[];
  @Input() favourites: ICard[];
  @Output() addFavourite = new EventEmitter<ICard>();

  constructor() {
  }

  ngOnInit(): void {

  }

  onAddToFavourites(card: ICard) {
    this.addFavourite.emit(card);
  }
}
