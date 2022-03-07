import {Injectable} from '@angular/core';
import {IUser} from '../models/user.model';
import {BehaviorSubject, combineLatestWith, from, map, Observable, shareReplay, Subject, take, tap} from 'rxjs';
import {HttpService} from '../../../api/http.service';
import {IUsersDataResponse} from "../models/usersDataResponse.model";

export interface IUserQueryParams {
  results: number,
  page: number
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private usersAddedSubject = new BehaviorSubject<IUser>(null);
  public userAddedAction$ = this.usersAddedSubject.asObservable();

  private userSelectedSubject = new Subject<string>();
  public userSelectedAction$ = this.userSelectedSubject.asObservable();

  private userUpdatedSubject = new Subject<IUser>();
  public userUpdatedAction$ = this.userUpdatedSubject.asObservable();

  private userSearchedSubject = new Subject<string>();
  public userSearchedAction$ = this.userSearchedSubject.asObservable();

  private pageFeatureChangedSubject = new BehaviorSubject<number>(10);
  public pageFeatureChangedAction$ = this.pageFeatureChangedSubject.asObservable();

  private addedUsers$: Observable<IUser[]> = from([]);

  public users$ = this.getUsersFromServer();

  public usersWithAdded$ = this.userAddedAction$.pipe(
    combineLatestWith(this.users$)
  ).pipe(
    map(([user, users]) => user ? [user, ...users] : users)
  )

  public filteredUsers$ = this.userSearchedAction$.pipe(
    combineLatestWith(this.users$)
  ).pipe(
    tap(console.log),
    map(([value, users]) => users.filter(u =>
        u.name.first.toLowerCase().includes(value) || u.name.last.toLowerCase().includes(value)),
    ),
    tap(console.log)

  )

  public selectedUser$ = this.userSelectedAction$.pipe(
    combineLatestWith(this.users$)
  ).pipe(
    map(([userId, users]) => users.find(u => u.id.value === userId))
  )

  public usersWithEdit$ = this.userUpdatedAction$.pipe(
    combineLatestWith(this.users$)
  ).pipe(
    map(([user, users]) => users.map(u => {
      if (u.id.value === user.id.value) {
        return user;
      }
      return u;
    }))
  )

  constructor(
    private httpService: HttpService) {
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

  public editUser(userModified: IUser): void {
    this.userUpdatedSubject.next(userModified);
  }

  public selectUser(userId: string) {
    this.userSelectedSubject.next(userId);
  }

  public searchUser(value: string) {
    this.userSearchedSubject.next(value);
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
