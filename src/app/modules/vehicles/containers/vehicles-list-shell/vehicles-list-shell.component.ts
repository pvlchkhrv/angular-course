import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {VehicleService} from '../../services/vehicles.service';
import {ICard} from '../../../shared/models/card.model';
import {FavouritesService} from '../../../../core/services/favourites.service';

@Component({
  selector: 'app-vehicles-list-shell',
  templateUrl: './vehicles-list-shell.component.html',
  styleUrls: ['./vehicles-list-shell.component.scss'],
})
export class VehiclesListShellComponent implements OnInit {

  public vehicles: ICard[] = [];
  public favourites: ICard[] = [];

  constructor(private vehicleService: VehicleService, private favouritesService: FavouritesService) { }

  ngOnInit(): void {
    this.vehicles = this.vehicleService.getVehiclesMappedToCards();
    this.favourites = this.favouritesService.getFavourites();
  }

  addToFavourites(card: ICard): void {
    this.favouritesService.addToFavourites(card);
    console.log(this.favourites);
  }

}
