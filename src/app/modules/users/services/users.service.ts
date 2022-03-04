import {Injectable} from '@angular/core';
import {IUser} from '../models/user.model';
import {BehaviorSubject, map, merge, Observable, of, scan, shareReplay, Subject, tap} from 'rxjs';
import {HttpService} from '../../../api/http.service';
import {IUsersDataResponse} from "../models/usersDataResponse.model";
import {MapToCardsService} from "../../shared/services/mapToCards.service";

export interface IUserQueryParams {
  results: number,
  page: number
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private usersAddedSubject = new Subject<IUser>();
  public userAddedAction$ = this.usersAddedSubject.asObservable();

  constructor(
    private httpService: HttpService,
    private mapToCardsService: MapToCardsService) {
  }

  users$ = this.getUsersFromServer();

  // public users$ = merge(
  //   this.getUsersFromServer(),
  //   this.userAddedAction$
  // ).pipe(
  //   scan((acc: IUser[], value: IUser) => [...acc, value]),
  //   tap(console.log)
  // )

  public usersAsCards$ = this.getUsersFromServer()
    .pipe(
      map(users => this.mapToCardsService.mapUsersToCards(users))
    );

  public getUsersDataFromServer(results: number = 50, page: number = 1): Observable<IUsersDataResponse> {
    const queryParams = {results, inc: 'gender,name,location,email,dob,picture,id', seed: 'foobar', page: page};
    return this.httpService
      .get('', {params: queryParams})
      .pipe(
        tap(console.log),
        shareReplay(1),
      );
  }

  public getUsersFromServer(options?: IUserQueryParams): Observable<IUser[]> {
    return this.getUsersDataFromServer(options?.results, options?.page)
      .pipe(
        tap(data => console.log(data)),
        map(response => [...response['results']])
      );
  }

  public getUserById(id: number): Observable<IUser> {
    return this.getUsersFromServer()
      .pipe(
        map(users =>
          users.find(user => user.id.value === id.toString()))
      )
  }

  public getUsersOnSearch(value: string): Observable<IUser[]> {
    return this.getUsersFromServer()
      .pipe(
        map(users => users.filter(u =>
          u.name.first.toLowerCase().includes(value) || u.name.last.toLowerCase().includes(value))),
      )
  }

  public addUser(user: IUser): void {
    this.usersAddedSubject.next(user);
  }

  // public editUser(userModified: IUser): void {
  //   this.users = this.users.map(u => {
  //     if (userModified.id === u.id) {
  //       return userModified;
  //     }
  //     return u;
  //   });
  // }

}
