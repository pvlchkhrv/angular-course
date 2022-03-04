import {Component, OnInit, ViewChild} from '@angular/core';
import {IUserQueryParams, UsersService} from '../../services/users.service';
import {ICard} from '../../../shared/models/card.model';
import {FavouritesService} from '../../../shared/services/favourites.service';
import {IUser} from '../../models/user.model';
import {MapToCardsService} from '../../../shared/services/mapToCards.service';
import {map, Observable, take} from 'rxjs';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {Event} from "@angular/router";

@Component({
  selector: 'app-user-list-shell',
  templateUrl: './user-list-shell.component.html',
  styleUrls: ['./user-list-shell.component.scss'],
})
export class UserListShellComponent implements OnInit {
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  public type: string = 'users';
  public users$: Observable<IUser[]>;
  public usersAsCards$: Observable<ICard[]>;
  public usersPerPage$: Observable<ICard[]>
  public favourites$: Observable<ICard[]>

  constructor(
    private usersService: UsersService,
    private favouritesService: FavouritesService,
  ) {
  }

  public ngOnInit(): void {
    // this.usersAsCards$ = this.usersService.getUsersFromServer()
      // .pipe(
      //   map(users => this.mapToCardsService.mapUsersToCards(users)),
      // );

    this.favourites$ = this.favouritesService.getFavourites(this.type);

    this.favouritesService.favouriteAdded
      .pipe(take((1)))
      .subscribe(card => {
        this.addToFavourites(card);
        this.favourites$ = this.favouritesService.getFavourites(this.type); // TODO: ask Nikolai and Alex
      });

    this.favouritesService.favouriteRemoved
      .pipe(take(1))
      .subscribe(cardId => {
        this.removeFromFavourites(cardId);
        this.favourites$ = this.favouritesService.getFavourites(this.type); // TODO: ask Nikolai and Alex
      });
  }

  public onChangePageSize(event: PageEvent) {
    // const requestOptions: IUserQueryParams = {
    //   results: event.pageSize,
    //   page: event.pageIndex + 1
    // }
    // this.usersAsCards$ = this.usersService.getUsersFromServer(requestOptions).pipe(
    //   map(users => this.mapToCardsService.mapUsersToCards(users)),
    // );
  }

  public addToFavourites(card: ICard): void {
    this.favouritesService.addToFavourites(card, this.type);
  }

  public removeFromFavourites(cardId: number) {
    this.favouritesService.removeFromFavourites(cardId, this.type);
  }

  public onSearch(value: string) {
    // this.usersAsCards$ = this.usersService.getUsersOnSearch(value)
    //   .pipe(
    //     map(users =>
    //       this.mapToCardsService.mapUsersToCards(users)
    //     )
    //   );
  }
}
