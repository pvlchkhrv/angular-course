import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ICard} from '../../models/card.model';
import {FavouritesService} from '../../../core/services/favourites.service';

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

  public onRemove(card: ICard): void {
    this.favouriteService.removeFromFavourites(card);
  }
}
