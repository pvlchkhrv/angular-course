import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {ICard} from '../../../shared/models/card.model';
import {FavouritesService} from '../../../shared/services/favourites.service';
import {IUser} from '../../models/user.model';
import {MapToCardsService} from '../../../shared/services/mapToCards.service';
import {map, Observable, takeWhile} from 'rxjs';

@Component({
  selector: 'app-user-list-shell',
  templateUrl: './user-list-shell.component.html',
  styleUrls: ['./user-list-shell.component.scss'],
})
export class UserListShellComponent implements OnInit, OnDestroy {
  public type: string = 'users';
  public users$: Observable<IUser[]>;
  public usersAsCards$: Observable<ICard[]>;
  public favourites$: Observable<ICard[]>
  private isComponentActive: boolean = true;

  constructor(
    private usersService: UsersService,
    private favouritesService: FavouritesService,
    private mapToCardsService: MapToCardsService) {
  }

  public ngOnInit(): void {
    this.users$ = this.usersService.getUsers();

    this.usersAsCards$ = this.users$.pipe(
      map(users => this.mapToCardsService.mapUsersToCards(users))
    );

    this.favourites$ = this.favouritesService.getFavourites(this.type);
    this.favourites$.subscribe(favs => console.log(favs))

    this.favouritesService.favouriteAdded
      .pipe(takeWhile(() => this.isComponentActive))
      .subscribe(card => {
        this.addToFavourites(card);
        this.favourites$ = this.favouritesService.getFavourites(this.type); // TODO: ask Nikolai and Alex
      });

    this.favouritesService.favouriteRemoved
      .pipe(takeWhile(() => this.isComponentActive))
      .subscribe(cardId => {
        this.removeFromFavourites(cardId);
        this.favourites$ = this.favouritesService.getFavourites(this.type); // TODO: ask Nikolai and Alex
      });
  }

  public ngOnDestroy() {
    this.isComponentActive = false;
  }

  public addToFavourites(card: ICard): void {
    this.favouritesService.addToFavourites(card, this.type);
  }

  public removeFromFavourites(cardId: number) {
    this.favouritesService.removeFromFavourites(cardId, this.type);
  }

  public onSearch(value: string) {
    this.usersAsCards$ = this.usersService.getUsersOnSearch(value)
      .pipe(
        map(users =>
          this.mapToCardsService.mapUsersToCards(users)
        )
      );
  }
}
