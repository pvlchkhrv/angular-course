import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../modules/auth/services/auth.service';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {UsersStorageAdapterService} from '../../../services/storage/adapters/users-storage-adapter.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
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
      this.setUserName();
    });
  }

  setTitle(routerEvent: RouterEvent) {
    if (routerEvent instanceof NavigationEnd) {
      this.title = this.router.routerState.snapshot.url.slice(1).toUpperCase();
    }
  }

  setUserName(): void {
    const userName = this.usersStorageAdapterService.getCurrentUser().userName;
    if (userName) {
      this.userName = userName;
    }
  }
}
