import {Injectable} from '@angular/core';
import {IUser, IUser2} from '../models/user.model';
import {delay, map, Observable} from 'rxjs';
import {HttpService} from '../../../api/http.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpService) {
  }

  public users: IUser[] = [
    {
      id: 1,
      firstName: 'Bear',
      lastName: 'Bearoff',
      age: 18,
      imgSrc: '../../assets/images/users/2010-kodiak-bear-1.jpg',
      gender: 'male',
      company: 'Forest',
      department: 'Predator',
      email: 'bear@gmail.com',
      addresses: []
    },
    {
      id: 2,
      firstName: 'Lynx',
      lastName: 'Lynxoff',
      age: 21,
      imgSrc: '../../assets/images/users/natura-2000-research-in-czech-republic-2.jpg',
      gender: 'male',
      company: 'Forest',
      department: 'Predator',
      email: 'lynx@gmail.com',
      addresses: [
        {addressLine: 'sssss', city: 'Minsk', zip: '220025'}
      ]
    },
    {
      id: 3,
      firstName: 'Wolf',
      lastName: 'Wolfoof',
      age: 8,
      imgSrc: '../../assets/images/users/cf4f55c5e4802a1a4fedf5c93f3bc36b-800x.jpg',
      gender: 'male',
      company: 'Forest',
      department: 'Predator',
      email: 'wolf@gmail.com',
      addresses: []
    },
    {
      id: 4,
      firstName: 'Dog',
      lastName: 'Dogoff',
      age: 21,
      imgSrc: '../../assets/images/users/shiba2.jpg',
      gender: 'male',
      company: 'Forest',
      department: 'Predator',
      email: 'dog@gmail.com',
      addresses: []
    },
  ];

  public getUsers(): Observable<IUser2[]> {
    return this.http.users;
  }

  public getUserById(id: number): Observable<IUser2> {
    return this.http.users.pipe(
      map(users => users.find(u => u.id === id)),
      delay(500)
    )
  }

  public getUsersOnSearch(value: string): Observable<IUser2[]> {
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
