import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ValidationErrors} from '@angular/forms';
import {UsersService} from './users.service';
import {IUser} from '../models/user.model';

@Injectable()
export class FormValidationService {

  constructor(private usersService: UsersService) {
  }

  public validateUniqueEmailAsync(userEmail: string): Observable<ValidationErrors> {
    const email = this.getUsersEmails().find(emailInStorage => emailInStorage === userEmail);
    return new Observable<ValidationErrors>((observer) => {
      if (email) {
        observer.next({
          isEmailExist: true
        });
      } else {
        observer.next(null);
      }
      observer.complete();
    });
  }

  private getUsersEmails(): string[] {
    let emails: string[];
    this.usersService.getUsers().subscribe((users: IUser[]) => {
      emails = users.map(u => u.email);
    });
    return emails;
  }
}
