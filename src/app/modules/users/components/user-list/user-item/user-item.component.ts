import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICard} from '../../../../shared/models/card.model';
import {IUser} from '../../../models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() user: ICard;
  @Output() onAddToFavouritesClick = new EventEmitter<ICard>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onClick() {
    this.onAddToFavouritesClick.emit(this.user);
  }
}
