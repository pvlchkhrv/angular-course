import {Injectable} from '@angular/core';
import {ICard} from '../../modules/shared/models/card.model';

@Injectable()
export class FavouritesService {
  public favourites: ICard[] = [];

  constructor() {
  }

  public addToFavourites(card: ICard) {
    const isRepeated = this.favourites.some(f => f.title === card.title);
    if (!isRepeated) {
      this.favourites = [...this.favourites, card];
      console.log(this.favourites);
    }
  }

  public getFavourites() {
    return this.favourites;
  }

}
