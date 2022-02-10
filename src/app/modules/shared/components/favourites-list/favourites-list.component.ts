import {Component, Input, OnInit} from '@angular/core';
import {ICard} from '../../models/card.model';
import {FavouritesService} from '../../services/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.scss']
})
export class FavouritesListComponent implements OnInit {
  @Input() public favourites: ICard[];

  constructor(private favouriteService: FavouritesService) {
  }

  ngOnInit(): void {
  }

  handleRemoveFromFavourites(cardId) {
    this.favouriteService.favouriteRemoved.emit(cardId);
  }
}
