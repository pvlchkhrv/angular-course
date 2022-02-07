import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IVehicle} from '../../models/vehicle.model';
import {ICard} from '../../../shared/models/card.model';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {
  @Input() vehicles: ICard[];
  @Input() favourites: ICard[];
  @Output() addFavourite = new EventEmitter<ICard>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToFavourites(card: ICard) {
    this.addFavourite.emit(card);
  }

}
