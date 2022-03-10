import {Injectable} from '@angular/core';
import {IRegisteredUser} from "../models/registered-user.model";
import {v4} from 'uuid';
import {UsersStorageAdapterService} from '../../../services/storage/adapters/users-storage-adapter.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public currentUser: IRegisteredUser;
  public redirectUrl: string;


  constructor(private usersStorageAdapterService: UsersStorageAdapterService,
              private router: Router) {
  }

  public isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  public login(userName: string, password: string): void {
    const user = this.usersStorageAdapterService.getUser(userName);
    if (!user) {
      throw new Error(`No user with such name!`);
    }
    if(user.password === password) {
      this.usersStorageAdapterService.setCurrentUser(user);
      this.currentUser = user;
      this.router.navigate(['/users']);
    }
  }

  public register(userName: string, password: string): void {
    this.usersStorageAdapterService.setUser({
      id: v4(),
      userName,
      password
    })
    this.router.navigate(['/login']);
  }

  public logout(): void {
    this.currentUser = null;
  }
}

