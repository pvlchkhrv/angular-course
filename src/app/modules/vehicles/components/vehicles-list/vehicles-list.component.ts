import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICard} from '../../../shared/models/card.model';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {
  @Input() public vehicles: ICard[];
  @Input() public favourites: ICard[];
  @Output() private onAddToFavouritesClick = new EventEmitter<ICard>();

  constructor() { }

  public ngOnInit(): void {
  }

  public handleOnAddToFavouritesClick(card: ICard): void {
    this.onAddToFavouritesClick.emit(card);
  }
}
