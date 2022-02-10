import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../../services/vehicles.service';
import {ICard} from '../../../shared/models/card.model';
import {FavouritesService} from '../../../shared/services/favourites.service';
import {MapToCardsService} from '../../../shared/services/mapToCards.service';
import {IVehicle} from '../../models/vehicle.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-vehicles-list-shell',
  templateUrl: './vehicles-list-shell.component.html',
  styleUrls: ['./vehicles-list-shell.component.scss'],
})
export class VehiclesListShellComponent implements OnInit {
  public type: string = 'vehicles';
  public vehicles: IVehicle[] = [];
  public vehiclesAsCards: ICard[] = [];
  public favourites: ICard[] = [];

  constructor(
    private vehicleService: VehicleService,
    private favouritesService: FavouritesService,
     private mapToCardsService: MapToCardsService
  ) { }

  public ngOnInit(): void {
    const vehicles$: Observable<IVehicle[]> = this.vehicleService.getVehicles();
    vehicles$.subscribe((vehicles: IVehicle[]) => {
      this.vehicles = vehicles;
    });

    const vehiclesAsCards$: Observable<ICard[]> = this.mapToCardsService.mapVehiclesToCards();
    vehiclesAsCards$.subscribe((vehiclesAsCards: ICard[]) => {
      this.vehiclesAsCards = vehiclesAsCards;
    })

    const favourites$: Observable<ICard[]> = this.favouritesService.getFavourites();
    favourites$.subscribe((favourites: ICard[]) => {
      this.favourites = favourites;
    });

    this.favouritesService.favouriteAdded.subscribe( card => {
      this.addToFavourites(card);
    });

    this.favouritesService.favouriteRemoved.subscribe(cardId => {
      this.removeFromFavourites(cardId)
    });
  }

  public addToFavourites(card: ICard): void {
    this.favouritesService.addToFavourites(card, this.type);
  }

  public removeFromFavourites(cardId: number) {
    this.favouritesService.removeFromFavourites(cardId, this.type);
  }
}
