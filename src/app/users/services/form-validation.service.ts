import {Injectable} from '@angular/core';
import {map, Observable, take} from 'rxjs';
import {ValidationErrors} from '@angular/forms';
import {UsersService} from './users.service';
import {UsersStorageAdapterService} from '../../core/services/storage/adapters/users-storage-adapter.service';

@Injectable()
export class FormValidationService {

  constructor(private usersService: UsersService,
              private userStorageAdapter: UsersStorageAdapterService) {
  }

  public validateUniqueEmailAsync(userEmail: string): Observable<ValidationErrors> {
    let email: string;

    this.getUsersEmails().subscribe(emails =>
      email = emails.find(emailInStorage => emailInStorage === userEmail)
    );

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

  public validateUniqueUserNameAsync(userName: string): Observable<ValidationErrors> {
    let name: string;

    const users = this.userStorageAdapter.getUsers();
    if (users[userName]) {
      name = userName;
    }
    return new Observable<ValidationErrors>((observer) => {
      if (name) {
        observer.next({
          isNameExist: true
        });
      } else {
        observer.next(null);
      }
      observer.complete();
    });
  }

  private getUsersEmails(): Observable<string[]> {
    return this.usersService.users$
      .pipe(
        take(1),
        map(users => users.map(user => user.email)),
      );
  }
}
