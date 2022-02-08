import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from '../../models/user.model';
import {ICard} from '../../../shared/models/card.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() public usersAsCards: ICard[];
  @Input() public favourites: ICard[];
  @Output() private onAddToFavouritesClick = new EventEmitter<ICard>();

  constructor() {

  }

  public ngOnInit(): void {

  }

  public handleOnAddToFavouritesClick(card: ICard): void {
    this.onAddToFavouritesClick.emit(card);
  }
}
