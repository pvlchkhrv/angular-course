import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../../services/vehicles.service';
import {ICard} from '../../../shared/models/card.model';
import {FavouritesService} from '../../../shared/services/favourites.service';

@Component({
  selector: 'app-vehicles-list-shell',
  templateUrl: './vehicles-list-shell.component.html',
  styleUrls: ['./vehicles-list-shell.component.scss'],
})
export class VehiclesListShellComponent implements OnInit {
  private type: string = 'vehicles';
  public vehicles: ICard[] = [];
  public favourites: ICard[] = [];

  constructor(private vehicleService: VehicleService, private favouritesService: FavouritesService) { }

  public ngOnInit(): void {
    this.vehicles = this.vehicleService.getVehiclesMappedToCards();
    const favourites$ = this.favouritesService.getFavourites();
  }

  public addToFavourites(card: ICard): void {
    this.favouritesService.addToFavourites(card, this.type);
  }
}
