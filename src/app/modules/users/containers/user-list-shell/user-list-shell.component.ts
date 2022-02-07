import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {IUser} from '../../models/user.model';
import {ICard} from '../../../shared/models/card.model';
import {FavouritesService} from '../../../../core/services/favourites.service';

@Component({
  selector: 'app-users',
  templateUrl: './user-list-shell.component.html',
  styleUrls: ['./user-list-shell.component.scss'],
})
export class UserListShellComponent implements OnInit {

  public users: ICard[] = [];
  public favourites: ICard[] = [];

  constructor(private usersService: UsersService, private favouritesService: FavouritesService) {
  }

  ngOnInit() {
    this.users = this.usersService.getUsersMappedToCards();
    this.favourites = this.favouritesService.getFavourites();
  }

  addToFavourites(card: ICard): void {
    this.favouritesService.addToFavourites(card);
    console.log(this.favourites);
  }
}
