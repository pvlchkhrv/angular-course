import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {IUser} from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './user-list-shell.component.html',
  styleUrls: ['./user-list-shell.component.scss'],
})
export class UserListShellComponent implements OnInit {

  public users: IUser[] = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }
}
