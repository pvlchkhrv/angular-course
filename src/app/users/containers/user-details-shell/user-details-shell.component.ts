import { Component, OnInit } from '@angular/core';
import {map, Observable, switchMap, tap} from "rxjs";
import {IUser} from "../../models/user.model";
import {ActivatedRoute, Route} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-details-shell',
  templateUrl: './user-details-shell.component.html',
  styleUrls: ['./user-details-shell.component.scss']
})
export class UserDetailsShellComponent implements OnInit {
  public user$: Observable<IUser> = this.route.params.pipe(
    map(params => params['id']),
    switchMap(id => this.usersService.getUserById(id))
  )

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
  }

}
