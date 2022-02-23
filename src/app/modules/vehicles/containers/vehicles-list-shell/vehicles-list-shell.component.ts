import {Component, OnDestroy, OnInit} from '@angular/core';
import {VehicleService} from '../../services/vehicles.service';
import {ICard} from '../../../shared/models/card.model';
import {FavouritesService} from '../../../shared/services/favourites.service';
import {MapToCardsService} from '../../../shared/services/mapToCards.service';
import {IVehicle} from '../../models/vehicle.model';
import {map, Observable, takeWhile} from 'rxjs';

@Component({
  selector: 'app-vehicles-list-shell',
  templateUrl: './vehicles-list-shell.component.html',
  styleUrls: ['./vehicles-list-shell.component.scss'],
})
export class VehiclesListShellComponent implements OnInit, OnDestroy {
  public type: string = 'vehicles';
  public vehicles$: Observable<IVehicle[]>;
  public vehiclesAsCards$: Observable<ICard[]>;
  public favourites$: Observable<ICard[]>;
  private isComponentActive: boolean = true;

  constructor(
    private vehicleService: VehicleService,
    private favouritesService: FavouritesService,
    private mapToCardsService: MapToCardsService
  ) {
  }

  public ngOnInit(): void {
    this.vehicles$ = this.vehicleService.getVehicles();

    this.vehiclesAsCards$ = this.vehicles$.pipe(
      map(vehicles =>
        this.mapToCardsService.mapVehiclesToCards(vehicles))
    );

    const favourites$: Observable<ICard[]> = this.favouritesService.getFavourites(this.type);

    this.favouritesService.favouriteAdded
      .pipe(takeWhile(() => this.isComponentActive))
      .subscribe(card => {
      this.addToFavourites(card);
    });

    this.favouritesService.favouriteRemoved
      .pipe(takeWhile(() => this.isComponentActive))
      .subscribe(cardId => {
      this.removeFromFavourites(cardId)
    });
  }

  public ngOnDestroy() {
    this.isComponentActive = false;
  }

  public addToFavourites(card: ICard): void {
    this.favouritesService.addToFavourites(card, this.type);
  }

  public removeFromFavourites(cardId: number) {
    this.favouritesService.removeFromFavourites(cardId, this.type);
  }
}
