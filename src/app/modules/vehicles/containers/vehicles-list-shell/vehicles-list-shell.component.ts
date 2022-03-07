import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../../services/vehicles.service';
import {ICard} from '../../../shared/models/card.model';
import {FavouritesService} from '../../../shared/services/favourites.service';
import {MapToCardsService} from '../../../shared/services/mapToCards.service';
import {map, merge, Observable, take, tap} from 'rxjs';

@Component({
  selector: 'app-vehicles-list-shell',
  templateUrl: './vehicles-list-shell.component.html',
  styleUrls: ['./vehicles-list-shell.component.scss'],
})
export class VehiclesListShellComponent implements OnInit {
  public type: string = 'vehicles';
  public vehiclesCards$: Observable<ICard[]>;
  public favourites$: Observable<ICard[]>;

  constructor(
    private vehicleService: VehicleService,
    private favouritesService: FavouritesService,
    private mapToCardsService: MapToCardsService
  ) {
  }

  public ngOnInit(): void {
    this.vehiclesCards$ = this.vehicleService.vehicles$.pipe(
      map(vehicles =>
        this.mapToCardsService.mapVehiclesToCards(vehicles))
    )

    this.favourites$ = merge(
      this.favouritesService.favourites$,
      this.favouritesService.favouritesWithAdded$,
      this.favouritesService.favouritesAfterRemove$,
    ).pipe(
      map(favourites => favourites[this.type])
    )
  }
}
