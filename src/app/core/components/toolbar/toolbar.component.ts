import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../modules/auth/services/auth.service';
import {NavigationStart, Router, RouterEvent} from '@angular/router';
import {UsersStorageAdapterService} from '../../../services/storage/adapters/users-storage-adapter.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{
  public title: string;
  public isLoggedIn:boolean;
  public userName: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private usersStorageAdapterService: UsersStorageAdapterService
  ) {
    router.events.subscribe((routerEvent: RouterEvent) => {
      this.setTitle(routerEvent);
    });
  }

  ngOnInit() {
    console.log(this.isLoggedIn)
  }

  setTitle(routerEvent: RouterEvent) {
    if (routerEvent instanceof NavigationStart) {
      this.title = this.router.routerState.snapshot.url.slice(1).toUpperCase();
    }
  }

  setUserName(): void {
    const user = this.usersStorageAdapterService.getCurrentUser().userName;
    if (user) {
      this.userName = user;
    }
  }
}
