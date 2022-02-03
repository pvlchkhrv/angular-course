import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {IUser} from '../../models/user.model';

@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.scss']
})
export class AddUserShellComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  onAddUser(user: IUser) {
    this.userService.addUser(user);
  }
}
