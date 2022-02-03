import {Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {IUser} from '../../models/user.model';
import {UserItemComponent} from '../../components/user-list/user-item/user-item.component';
import {UserListComponent} from '../../components/user-list/user-list.component';

@Component({
  selector: 'app-users',
  templateUrl: './user-list-shell.component.html',
  styleUrls: ['./user-list-shell.component.scss'],
  providers: [UsersService]
})
export class UserListShellComponent implements OnInit, OnChanges, DoCheck{

  public users: IUser[] = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

  ngDoCheck() {
    console.log('Do check')
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges')
  }
}
