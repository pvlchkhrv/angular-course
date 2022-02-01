import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {IUser} from '../../models/IUser';
import {UserItemComponent} from '../../components/user-list/user-item/user-item.component';
import {UserListComponent} from '../../components/user-list/user-list.component';

@Component({
  selector: 'app-users',
  templateUrl: './user-list-shell.component.html',
  styleUrls: ['./user-list-shell.component.scss'],
  providers: [UsersService]
})
export class UserListShellComponent implements OnInit{
  @ViewChild('userItem', {static: true})
  private card: UserItemComponent;

  public users: IUser[] = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }
}
