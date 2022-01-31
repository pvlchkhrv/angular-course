import {Injectable} from '@angular/core';

export interface IUser {
  name: string;
  age: number;
  activated: boolean;
  imgUrl: string;
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor() {
  }

  private users: IUser[] = [
    {
      name: 'Bear',
      age: 18,
      activated: false,
      imgUrl: '../../assets/images/2010-kodiak-bear-1.jpg'
    },
    {
      name: 'Lynx',
      age: 21,
      activated: true,
      imgUrl: '../../assets/images/natura-2000-research-in-czech-republic-2.jpg'
    },
    {
      name: 'Wolf',
      age: 8,
      activated: true,
      imgUrl: '../../assets/images/cf4f55c5e4802a1a4fedf5c93f3bc36b-800x.jpg'
    },
    {name: 'Dog', age: 3, activated: true, imgUrl: '../../assets/images/shiba2.jpg'},
  ]

  getUsers() {
    return this.users;
  }

  addUser(user: IUser) {
    this.users.push(user);
  }

  deactivateUser(user: IUser) {
    user.activated = !user.activated
  }

}
