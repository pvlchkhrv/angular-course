import {Injectable} from '@angular/core';
import {map, Observable, takeWhile} from 'rxjs';
import {ValidationErrors} from '@angular/forms';
import {UsersService} from './users.service';
import {IUser} from '../models/user.model';

@Injectable()
export class FormValidationService {

  constructor(private usersService: UsersService) {
  }

  public validateUniqueEmailAsync(userEmail: string): Observable<ValidationErrors> {
    let email: string;
    this.getUsersEmails().subscribe(emails => email = emails.find(emailInStorage => emailInStorage === userEmail))
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

  private getUsersEmails(): Observable<string[]> {
    return this.usersService.getUsers()
      .pipe(
        map(users => users.map(user => user.email))
      )
  }
}
