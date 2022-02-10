import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {ICard} from '../../../shared/models/card.model';
import {FavouritesService} from '../../../shared/services/favourites.service';
import {IUser} from '../../models/user.model';
import {MapToCardsService} from '../../../shared/services/mapToCards.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './user-list-shell.component.html',
  styleUrls: ['./user-list-shell.component.scss'],
})
export class UserListShellComponent implements OnInit {
  public type: string = 'users';
  public users: IUser[] = [];
  public usersAsCards: ICard[] = [];
  public favourites: ICard[] = [];

  constructor(
    private usersService: UsersService,
    private favouritesService: FavouritesService,
    private mapToCardsService: MapToCardsService) {
  }

  public ngOnInit(): void {
    const users$: Observable<IUser[]> = this.usersService.getUsers();
    users$.subscribe((users: IUser[]) => {
      this.users = users;
    });

    const usersAsCards$: Observable<ICard[]> = this.mapToCardsService.mapUsersToCards();
    usersAsCards$.subscribe((usersAsCards: ICard[]) => {
      this.usersAsCards = usersAsCards;
    });

    const favourites$: Observable<ICard[]> = this.favouritesService.getFavourites();
    favourites$.subscribe((favourites: ICard[]) => {
      this.favourites = favourites;
    });
  }

  public addToFavourites(card: ICard): void {
    this.favouritesService.addToFavourites(card, this.type);
  }

  public removeFromFavourites(cardId: number) {
    this.favouritesService.removeFromFavourites(cardId, this.type);
  }
}
