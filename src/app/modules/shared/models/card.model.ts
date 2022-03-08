import {FavouriteTypes} from '../services/favourites.service';

export interface ICard {
  id: string;
  type: FavouriteTypes;
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
}
