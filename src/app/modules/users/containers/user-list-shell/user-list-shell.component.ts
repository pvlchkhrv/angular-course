import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {IUserQueryParams, UsersService} from '../../services/users.service';
import {ICard} from '../../../shared/models/card.model';
import {FavouritesService} from '../../../shared/services/favourites.service';
import {MapToCardsService} from '../../../shared/services/mapToCards.service';
import {map, merge, Observable, Subscription, take, tap} from 'rxjs';
import {MatPaginator, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-user-list-shell',
  templateUrl: './user-list-shell.component.html',
  styleUrls: ['./user-list-shell.component.scss'],
})
export class UserListShellComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  public type: string = 'users';
  private subs = new Subscription();

  public userCards$: Observable<ICard[]>;
  public favourites$: Observable<ICard[]>;
  public userCardsPerPage$: Observable<ICard[]>


  constructor(
    private usersService: UsersService,
    private favouritesService: FavouritesService,
    private mapService: MapToCardsService
  ) {}

  public ngOnInit(): void {

   this.userCardsPerPage$ = merge(
      this.usersService.users$,
      this.usersService.usersWithAdded$,
      this.usersService.usersWithEdit$,
      this.usersService.filteredUsers$
    ).pipe(
      tap(value => console.log(value)),
      map(users => this.mapService.mapUsersToCards(users).slice(0, 10))
    )

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

  public ngAfterViewInit() {
    this.subs.add(this.paginator.page.subscribe( event =>
      this.handlePaginatorChanges(event)
    ));
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }

  public handlePaginatorChanges(event: PageEvent) {
    const requestOptions: IUserQueryParams = {
      results: event.pageSize,
      page: event.pageIndex + 1
    }

    this.userCardsPerPage$ = this.usersService.getUsersFromServer(requestOptions).pipe(
      map(users => this.mapService.mapUsersToCards(users)),
    );
  }

  public addToFavourites(card: ICard): void {
    this.favouritesService.addToFavourites(card, this.type);
  }

  public removeFromFavourites(cardId: number) {
    this.favouritesService.removeFromFavourites(cardId, this.type);
  }

  public onSearch(value: string) {
    console.log(value)
    this.usersService.searchUser(value);
  }
}
