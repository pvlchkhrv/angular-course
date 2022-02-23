import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ICard} from '../../models/card.model';
import {FavouritesService} from '../../services/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavouritesListComponent {
  @Input() public favourites: ICard[];

  constructor(private favouriteService: FavouritesService) {
  }

  handleRemoveFromFavourites(cardId: number) {
    this.favouriteService.favouriteRemoved.emit(cardId);
  }
}
