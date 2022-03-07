import {ICard} from './card.model';

export interface IFavourites {
  users: ICard[] | null;
  vehicles: ICard[] | null;
}
