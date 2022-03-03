import {Injectable} from '@angular/core';
import {IUser} from '../models/user.model';
import {delay, map, Observable, tap} from 'rxjs';
import {HttpService} from '../../../api/http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpService: HttpService) {
  }

  public users: IUser[] = [];
  public paginationDefaultOptions = {
    results: 50,
    page: 1
  }

  public getUsers(
    results: number = this.paginationDefaultOptions.results,
    page = this.paginationDefaultOptions.page): Observable<IUser[]> {

    const queryParams = {results, page, inc: 'gender,name,location,email,dob,picture,id', seed: 'foobar'};

    return this.httpService.get('', {params: queryParams})
      .pipe(
        map(data => data['results']),
        tap(users => this.users = users)
      );
  }

  public getUserById(id: number): Observable<IUser> {
    return this.httpService
      .get('')
      .pipe(
        map(users => users.find(u => u.id === id)),
        delay(500)
      )
  }

  public getUsersOnSearch(value: string): Observable<IUser[]> {
    return this.getUsers()
      .pipe(
        map(users => users.filter(u =>
          u.name.first.toLowerCase().includes(value) || u.name.last.toLowerCase().includes(value))),
      )
  }

  public addUser(user: IUser): void {
    this.users = [...this.users, user];
  }

  public editUser(userModified: IUser): void {
    this.users = this.users.map(u => {
      if (userModified.id === u.id) {
        return userModified;
      }
      return u;
    });
  }

}
