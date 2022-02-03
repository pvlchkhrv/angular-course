import {Injectable} from '@angular/core';
import {IUser} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor() {
  }

  public users: IUser[] = [
    {
      firstName: 'Bear',
      age: 18,
      activated: true,
      imgSrc: '../../assets/images/2010-kodiak-bear-1.jpg'
    },
    {
      firstName: 'Lynx',
      age: 21,
      activated: true,
      imgSrc: '../../assets/images/natura-2000-research-in-czech-republic-2.jpg'
    },
    {
      firstName: 'Wolf',
      age: 8,
      activated: true,
      imgSrc: '../../assets/images/cf4f55c5e4802a1a4fedf5c93f3bc36b-800x.jpg'
    },
    {firstName: 'Dog', age: 21, activated: true, imgSrc: '../../assets/images/shiba2.jpg'},
  ]

  public getUsers(): IUser[] {
    return this.users;
  }

  public addUser(user: IUser): void {
    this.users = [...this.users, user];
    console.log(this.users);
  }
}
