import {Injectable} from '@angular/core';
import {StorageService} from '../../storage.service';
import {IRegisteredUser} from '../../../../auth/models/registered-user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersStorageAdapterService {

  constructor(private storageService: StorageService) {
  }

  public setUsers(users): void {
    this.storageService.setItem('users', users);
  }

  public getUsers(): IRegisteredUser[] | void {
    const users = this.storageService.getItem('users');
    if (users) {
      return users;
    } else {
      this.setUsers({});
    }
  }

  public getUser(name: string): IRegisteredUser | void {
    const users = this.getUsers();
    const user = users[name];
    if (user) {
      return user;
    } else {
      console.log('No user with such email')
    }
  }

  public setUser(user: IRegisteredUser): void {
    const users = this.getUsers();
    users[user.userName] = user;
    this.setUsers(users);
  }

  public setCurrentUser(user: IRegisteredUser): void {
    this.storageService.setItem('currentUser', user);
  }

  public getCurrentUser(): IRegisteredUser {
   return this.storageService.getItem('currentUser');
  }
}
