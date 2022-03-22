import {Injectable} from '@angular/core';
import {HttpService} from '../../core/services/http.service';
import {map, Observable, take} from 'rxjs';
import {IUser} from '../../core/models/user.interface';
import {Sort} from '@angular/material/sort';

export interface IQueryParams {
  results: number,
  page: number,
}

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private httpService: HttpService) {
  }

  public fetchUsers(options?: IQueryParams): Observable<IUser[]> {
    const queryParams = {
      results: options?.results ? options.results : 500,
      seed: 'users',
      page: options?.page ? options.page : 1
    }

    return this.httpService.get('', {params: queryParams})
      .pipe(
        take(1),
        map(response => response['results'])
      );
  }

  public sortUsers(users: IUser[], sort: Sort): IUser[] {
    if (!sort.active || sort.direction === '') {
      return users;
    }
    const sortedUsers = users.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return this.compare(a.name.last, b.name.last, isAsc);
        case 'email':
          return this.compare(a.email, b.email, isAsc);
        case 'age':
          return this.compare(a.dob.age, b.dob.age, isAsc);
        case 'address':
          return this.compare(a.location.city, b.location.city, isAsc);
        default:
          return 0;
      }
    })

    return [...sortedUsers];
  }

  private compare(a: number | string, b: number | string, isAsc: boolean): number {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
