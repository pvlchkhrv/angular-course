import {Injectable} from '@angular/core';
import {IUser} from '../models/user.model';
import {
  BehaviorSubject,
  combineLatestWith,
  map,
  merge,
  mergeWith,
  Observable,
  scan,
  shareReplay,
  Subject,
  switchMap,
  tap
} from 'rxjs';
import {HttpService} from '../../../api/http.service';
import {IUsersDataResponse} from "../models/usersDataResponse.model";
import {MapToCardsService} from "../../shared/services/mapToCards.service";
import {ICard} from '../../shared/models/card.model';
import {combineLatest} from 'rxjs/operators';

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

  private userSelectedSubject = new Subject<string>();
  public userSelectedAction$ = this.userSelectedSubject.asObservable();

  private userUpdatedSubject = new Subject<IUser>();
  public userUpdatedAction$ = this.userUpdatedSubject.asObservable();

  private pageFeatureChangedSubject = new BehaviorSubject<number>(10);
  public pageFeatureChangedAction = this.pageFeatureChangedSubject.asObservable();


  constructor(
    private httpService: HttpService,
    private mapToCardsService: MapToCardsService) {
  }


  public getUsersDataFromServer(results: number = 50, page: number = 1): Observable<IUsersDataResponse> {
    const queryParams = {results, inc: 'gender,name,location,email,dob,picture,id', seed: 'users', page: page};
    return this.httpService
      .get('', {params: queryParams})
      .pipe(
        tap(data => console.log('http get users req', data)),
        shareReplay(1),
      );
  }

  public getUsersFromServer(options?: IUserQueryParams): Observable<IUser[]> {
    return this.getUsersDataFromServer(options?.results, options?.page)
      .pipe(
        map(response => [...response['results']])
      );
  }

  public getUserById(id: string): Observable<IUser> {
    return this.getUsersFromServer()
      .pipe(
        map(users =>
          users.find(user => user.id.value === id))
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

  public editUser2(userModified: IUser): void {
    this.userUpdatedSubject.next(userModified);
  }

  // public editUser(userModified: ICard): void {
  //   this.users = this.users.map(u => {
  //     if (userModified.id === u.id) {
  //       return userModified;
  //     }
  //     return u;
  //   });
  // }

}
