import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {ICard} from '../../../shared/models/card.model';
import {FavouritesService} from '../../../shared/services/favourites.service';
import {IUser} from "../../models/user.model";

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

  constructor(private usersService: UsersService, private favouritesService: FavouritesService) {
  }

  public ngOnInit(): void {
    const users$ = this.usersService.getUsers();
    const usersAsCards$ = this.usersService.getUsersAsCards();

    users$.subscribe((users: IUser[]) => {
      this.users = users;
    });

    usersAsCards$.subscribe((usersAsCards: ICard[]) => {
      this.usersAsCards = usersAsCards;
    });

    const favourites$ = this.favouritesService.getFavourites();
    favourites$.subscribe((favourites: ICard[]) => {
      this.favourites = favourites;
    });
  }

  public addToFavourites(card: ICard): void {
    console.log('Click to favs')
    this.favouritesService.addToFavourites(card, this.type);
    this.favouritesService.getFavourites().subscribe(favourites => this.favourites = favourites);
    console.log(this.favourites)
  }
}
