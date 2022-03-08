import {Injectable} from '@angular/core';
import {IUser} from '../models/user.model';
import {BehaviorSubject, combineLatestWith, map, Observable, shareReplay, Subject, tap} from 'rxjs';
import {HttpService} from '../../../api/http.service';
import {v4} from 'uuid';
import {FormGroup} from '@angular/forms';

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

  public users$ = this.getUsersFromServer().pipe(
    shareReplay(1)
  );

  public usersWithAdded$ = this.userAddedAction$.pipe(
    combineLatestWith(this.users$)
  ).pipe(
    map(([user, users]) => user ? [user, ...users] : users)
  )

  public usersWithEdit$ = this.userUpdatedAction$.pipe(
    combineLatestWith(this.users$)
  ).pipe(
    map(([user, users]) => users.map(u =>
      u.id === user.id ? user : u
    ))
  )

  public filteredUsers$ = this.userSearchedAction$.pipe(
    combineLatestWith(this.users$)
  ).pipe(
    tap(console.log),
    map(([value, users]) => users.filter(u =>
      u.name.first.toLowerCase().includes(value) || u.name.last.toLowerCase().includes(value)),
    ),
  )

  public selectedUser$ = this.userSelectedAction$.pipe(
    combineLatestWith(this.users$)
  ).pipe(
    map(([userId, users]) => users.find(u => u.id === userId))
  )

  constructor(
    private httpService: HttpService) {
  }

  public getUsersFromServer(options?: IUserQueryParams): Observable<IUser[]> {
    const queryParams = {
      results: options ? options.results : 50,
      inc: 'gender,name,location,email,dob,picture',
      seed: 'users',
      page: options ? options.page : 1
    }

    return this.httpService
      .get('', {params: queryParams})
      .pipe(
        map(response =>
          response['results'].map(user => ({id: v4(), ...user}))),
      )
  }

  public getUserById(id: string): Observable<IUser> {
    return this.getUsersFromServer()
      .pipe(
        map(users =>
          users.find(user => user.id === id))
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
    console.log(user)
    this.usersAddedSubject.next(user);
  }

  public editUser(userModified: IUser): void {
    this.userUpdatedSubject.next(userModified);
  }

  public selectUser(userId: string): void {
    this.userSelectedSubject.next(userId);
  }

  public searchUser(value: string): void {
    this.userSearchedSubject.next(value);
  }

  public mapFormDataToUserInterface(formGroup: FormGroup, userId: string): IUser {
    const formData = formGroup.value;
    console.log('map', formData)
    return {
      "id": userId,
      "gender": formData.userDetails.gender,
      "name": {
        "title": formData.userDetails.gender === 'male' ? 'Mr.' : 'Mrs',
        "first": formData.userDetails.firstName,
        "last": formData.userDetails.lastName
      },
      "location": {
        "street": {
          "number": 0,
          "name": formData.addresses[0].addressLine,
        },
        "city": formData.addresses[0].city,
        "state": '',
        "country": '',
        "postcode": formData.addresses.zip,
        "coordinates": {
          "latitude": '',
          "longitude": ''
        },
        "timezone": {
          "offset": '',
          "description": ''
        }
      },
      "email": formData.userDetails.email,
      "dob": {
        "date": "1993-07-20T09:44:18.674Z",
        "age": 26
      },
      "picture": {
        "large": formData.userDetails.imgSrc,
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
    }
  }
}
