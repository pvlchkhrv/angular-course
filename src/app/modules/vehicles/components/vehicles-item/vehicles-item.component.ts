import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICard} from '../../../shared/models/card.model';

@Component({
  selector: 'app-vehicles-item',
  templateUrl: './vehicles-item.component.html',
  styleUrls: ['./vehicles-item.component.scss']
})
export class VehiclesItemComponent implements OnInit {
  @Input() public vehicle: ICard;
  @Output() private onAddToFavouritesClick = new EventEmitter<ICard>();

  constructor() { }

  public ngOnInit(): void {
  }

  public handleOnAddToFavouritesClick(): void {
    this.onAddToFavouritesClick.emit(this.vehicle);
  }
}
