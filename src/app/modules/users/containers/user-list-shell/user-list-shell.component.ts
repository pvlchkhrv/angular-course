import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {ICard} from '../../../shared/models/card.model';
import {FavouritesService} from '../../../shared/services/favourites.service';
import {IUser} from '../../models/user.model';
import {MapToCardsService} from '../../../shared/services/mapToCards.service';
import {map, Observable, take, tap} from 'rxjs';
import {AppServiceService} from '../../../../app-service.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';

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
    private mapToCardsService: MapToCardsService,
    private appService: AppServiceService) {
  }

  public ngOnInit(): void {
    this.appService.showLoader();
    this.users$ = this.usersService.getUsers();
    this.users$.subscribe(users => this.appService.hideLoader());
    this.usersAsCards$ = this.users$.pipe(
      map(users => this.mapToCardsService.mapUsersToCards(users)),
    );

    this.usersPerPage$ = this.usersAsCards$.pipe(map(users => users.slice(0, 10)));

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
    this.paginator.page.subscribe(
      event => {
        const startIndex = event.pageIndex * event.pageSize;
        let endIndex = startIndex + event.pageSize;
        this.usersPerPage$ = this.usersAsCards$.pipe(map(cards => cards.slice(startIndex, endIndex)))
      }
    )
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
