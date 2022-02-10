import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ICard} from '../../../shared/models/card.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnChanges {
  @Input() public usersAsCards: ICard[];
  @Input() public favourites: ICard[];
  @Output() private onAddToFavouritesClick = new EventEmitter<ICard>();
  @Output() private onRemoveFromFavouritesClick = new EventEmitter<number>();

  constructor() {

  }

  public ngOnInit(): void {

  }

  public ngOnChanges(changes: SimpleChanges) {
  }

  public handleOnAddToFavouritesClick(card: ICard): void {
    this.onAddToFavouritesClick.emit(card);
  }

  public handleOnRemoveFromFavouritesClick(cardId: number): void {
    this.onRemoveFromFavouritesClick.emit(cardId);
  }
}
