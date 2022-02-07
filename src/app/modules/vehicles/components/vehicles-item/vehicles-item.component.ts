import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICard} from '../../../shared/models/card.model';

@Component({
  selector: 'app-vehicles-item',
  templateUrl: './vehicles-item.component.html',
  styleUrls: ['./vehicles-item.component.scss']
})
export class VehiclesItemComponent implements OnInit {
  @Input() vehicle: ICard;
  @Output() onAddToFavouritesClick = new EventEmitter<ICard>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick() {
    this.onAddToFavouritesClick.emit(this.vehicle);
  }

}
