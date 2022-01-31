import {Component, OnInit} from '@angular/core';
import {IUser, UsersService} from '../../services/users.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page-shell.component.html',
  styleUrls: ['./first-page-shell.component.scss'],
  providers: [UsersService]
})
export class FirstPageShellComponent implements OnInit{

  users: IUser[] = [];
  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.users = this.usersService.getUsers()
  }

  isAllCards: boolean = true;

  toggle() {
    this.isAllCards = !this.isAllCards;
  }

  isDisabled() {
    return !this.users.some(user => !user.activated);
  }
}
