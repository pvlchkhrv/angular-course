import {Injectable} from '@angular/core';
import {IUser} from '../models/user.model';
import {ICard} from '../../shared/models/card.model';
import {map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor() {
  }

  public users: IUser[] = [
    {
      id: 1,
      name: 'Bear',
      age: 18,
      imgSrc: '../../assets/images/users/2010-kodiak-bear-1.jpg',
      gender: 'male',
      company: 'Forest',
      department: 'Predator'
    },
    {
      id: 2,
      name: 'Lynx',
      age: 21,
      imgSrc: '../../assets/images/users/natura-2000-research-in-czech-republic-2.jpg',
      gender: 'male',
      company: 'Forest',
      department: 'Predator'
    },
    {
      id: 3,
      name: 'Wolf',
      age: 8,
      imgSrc: '../../assets/images/users/cf4f55c5e4802a1a4fedf5c93f3bc36b-800x.jpg',
      gender: 'male',
      company: 'Forest',
      department: 'Predator'
    },
    {
      id: 4,
      name: 'Dog', age: 21,
      imgSrc: '../../assets/images/users/shiba2.jpg',
      gender: 'male',
      company: 'Forest',
      department: 'Predator'
    },
  ]

  public getUsers(): Observable<IUser[]> {
    return of(this.users);
  }

  public addUser(user: IUser): Observable<IUser[]> {
    this.users = [...this.users, user];
    return of(this.users);
  }

  // public getUsersAsCards(): Observable<ICard[]> {
  //   const users$ = this.getUsers();
  //   return users$.pipe(map((users: IUser[]) => {
  //     return users.map((u: IUser) => {
  //       return {
  //         id: u.id,
  //         title: u.name,
  //         subtitle: u.company,
  //         imgSrc: u.imgSrc,
  //         description: `This is ${u.name} from ${u.company}. He is ${u.gender}.His department is ${u.department}.`
  //       }
  //     });
  //   }));
  // }
}
