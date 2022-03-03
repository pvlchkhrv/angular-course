import {Injectable} from '@angular/core';
import {IUser} from '../models/user.model';
import {delay, map, Observable} from 'rxjs';
import {HttpService} from '../../../api/http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpService: HttpService) {
  }

  public users: IUser[] = [];

  public getUsers(results: number = 10, page?: number): Observable<IUser[]> {
    const queryParams = {results, inc: 'gender,name,location,email,dob,picture,id', seed: 'foobar'};
    return this.httpService.get('', {params: queryParams})
      .pipe(
        map(data => data['results'])
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
