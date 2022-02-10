import {Injectable} from '@angular/core';
import {ICard} from '../models/card.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  public favourites: ICard[] = [];

  constructor() {
  }

  public addToFavourites(card: ICard, type: string): void {
    if (!this.favourites[type]) {
      this.favourites[type] = [card];
    } else {
      !this.favourites[type].some(fav => fav.id === card.id) && this.favourites[type].push(card);
    }
  }

  public removeFromFavourites(cardId: number, type: string) {
    this.getFavourites().subscribe(favourites => {
      console.log('before', this.favourites)
      if (favourites[type]) {
        this.favourites = favourites[type].filter(fav => fav.id !== cardId);
      }
      console.log('after', this.favourites)
    });
  }

  public getFavourites(): Observable<ICard[]> {
    return of(this.favourites);
  }
}
