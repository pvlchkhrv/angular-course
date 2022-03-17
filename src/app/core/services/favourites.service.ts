import {Injectable} from '@angular/core';
import {ICard} from '../../shared/models/card.model';
import {combineLatestWith, map, Observable, of, Subject} from 'rxjs';
import {IFavourites} from '../../shared/models/favourites.model';

export type FavouriteTypes = 'users' | 'vehicles';

@Injectable({
  providedIn: 'root'
})

export class FavouritesService {
  private favouriteAddedSubject = new Subject<ICard>();
  public favouriteAddedAction$ = this.favouriteAddedSubject.asObservable();

  private favouriteRemovedSubject = new Subject<ICard>();
  public favouriteRemovedAction$ = this.favouriteRemovedSubject.asObservable();

  public favourites$: Observable<IFavourites> = of({users: [], vehicles: []} as IFavourites);

  public favouritesWithAdded$: Observable<IFavourites> = this.favouriteAddedAction$.pipe(
    combineLatestWith(this.favourites$)
  ).pipe(
    map(([card, favourites]) => {
      const isDuplicated = favourites[card.type].some(f => card.id === f.id)
      if (!isDuplicated) {
        favourites[card.type] = [...favourites[card.type], card]
      }
      return favourites;
    })
  );

  public favouritesAfterRemove$: Observable<IFavourites> = this.favouriteRemovedAction$.pipe(
    combineLatestWith(this.favourites$)
  ).pipe(
    map(([card, favourites]) => {
      favourites[card.type] = favourites[card.type].filter(f => f.id !== card.id);
      return favourites;
    })
  );

  public addToFavourites(card: ICard): void {
    this.favouriteAddedSubject.next(card);
  };

  public removeFromFavourites(card): void {
    this.favouriteRemovedSubject.next(card);
  };
}
