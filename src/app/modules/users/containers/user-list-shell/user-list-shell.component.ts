import {Component, OnInit, ViewChild} from '@angular/core';
import {IUserQueryParams, UsersService} from '../../services/users.service';
import {ICard} from '../../../shared/models/card.model';
import {FavouritesService, FavouriteTypes} from '../../../shared/services/favourites.service';
import {MapToCardsService} from '../../../shared/services/mapToCards.service';
import {map, merge, Observable, take, tap} from 'rxjs';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {IUser} from '../../models/user.model';

@Component({
  selector: 'app-user-list-shell',
  templateUrl: './user-list-shell.component.html',
  styleUrls: ['./user-list-shell.component.scss'],
})
export class UserListShellComponent implements OnInit {
  @ViewChild(MatPaginator) public paginator: MatPaginator;

  public type: FavouriteTypes = 'users';
  public userCardsPerPage$: Observable<ICard[]>;
  public favourites$: Observable<ICard[]>;
  public totalSize: Observable<number>;

  constructor(
    private usersService: UsersService,
    private favouritesService: FavouritesService,
    private mapService: MapToCardsService
  ) {
  }

  public ngOnInit(): void {

    this.userCardsPerPage$ = merge(
      this.usersService.users$,
      this.usersService.usersWithAdded$,
      this.usersService.usersWithEdit$,
      this.usersService.filteredUsers$
    ).pipe(
      map((users: IUser[]) => this.mapService.mapUsersToCards(users).slice(0, 10)),
      tap(users => console.log(users))
    )

    this.favourites$ = merge(
      this.favouritesService.favourites$,
      this.favouritesService.favouritesWithAdded$,
      this.favouritesService.favouritesAfterRemove$,
    ).pipe(
      map(favourites => favourites[this.type])
    )

    this.totalSize = this.usersService.users$.pipe(
      take(1),
      map(users => users.length)
    )
  }

  public onPaginationChange(event: PageEvent): void { // TODO change to declarative (replace with subject)
    const requestOptions: IUserQueryParams = {
      results: event.pageSize,
      page: event.pageIndex + 1
    }

    this.userCardsPerPage$ = this.usersService.getUsersFromServer(requestOptions).pipe(
      map(users => this.mapService.mapUsersToCards(users)),
    );
  }

  public onSearch(value: string): void {
    this.usersService.searchUser(value);
  }
}
