import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICard} from '../../../shared/models/card.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() public userAsCard: ICard;
  @Output() private onAddToFavouritesClick = new EventEmitter<ICard>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public handleOnAddToFavouritesClick(): void {
    this.onAddToFavouritesClick.emit(this.userAsCard);
  }
}
