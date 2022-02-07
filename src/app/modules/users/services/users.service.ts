import {Injectable} from '@angular/core';
import {IUser} from '../models/user.model';
import {Observable, of} from 'rxjs';
import {ICard} from '../../shared/models/card.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor() {
  }

  public users: IUser[] = [
    {
      name: 'Bear',
      age: 18,
      imgSrc: '../../assets/images/2010-kodiak-bear-1.jpg',
      gender: 'male',
      company: 'Forest',
      department: 'Predator'
    },
    {
      name: 'Lynx',
      age: 21,
      imgSrc: '../../assets/images/natura-2000-research-in-czech-republic-2.jpg',
      gender: 'male',
      company: 'Forest',
      department: 'Predator'
    },
    {
      name: 'Wolf',
      age: 8,
      imgSrc: '../../assets/images/cf4f55c5e4802a1a4fedf5c93f3bc36b-800x.jpg',
      gender: 'male',
      company: 'Forest',
      department: 'Predator'
    },
    {
      name: 'Dog', age: 21,
      imgSrc: '../../assets/images/shiba2.jpg',
      gender: 'male',
      company: 'Forest',
      department: 'Predator'
    },
  ]

  public getUsers(): IUser[] {
    return this.users
  }

  public getUsersMappedToCards(): ICard[]{
    return this.users.map(u => {
      return {
        title: u.name,
        subtitle: u.company,
        imgSrc:u.imgSrc,
        description: `This is ${u.name} from ${u.company}. He is ${u.gender}.His department is ${u.department}.`
      }
    });
  }

  public addUser(user: IUser): void {
    this.users = [...this.users, user];
  }
}
