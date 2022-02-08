import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {IUser} from '../../models/user.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.scss']
})
export class AddUserShellComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  public ngOnInit(): void {
  }

  public onAddUser(user: IUser): void {
    this.userService.addUser(user);
    this.router.navigate(['/users']);
  }
}
