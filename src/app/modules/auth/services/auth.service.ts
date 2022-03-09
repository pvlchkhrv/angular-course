import {Injectable} from '@angular/core';
import {IRegisteredUser} from "../models/registered-user.model";
import {StorageService} from "../../../storage/storage.service";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private storageService: StorageService) {
  }

  public getUsers() {
    return this.storageService.getItem('users');
  }

  public setUser(user: IRegisteredUser): void {
    const users = this.getUsers();
    users[user.userName] = user;
  }

  public getUser(userName: string) {
    return this.getUsers()[userName];
  }

  public signIn(userName: string, password) {
    const user = this.getUser(userName);
    if (!user) {
      throw new Error(`No user with such name!`);
    }
    if(!user.password === password) {
      throw new Error(`Wrong Password!`);
    }
    console.log('login success')
  }
}

