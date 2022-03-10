import {Component, Input} from '@angular/core';
import {AuthService} from '../../../modules/auth/services/auth.service';
import {NavigationStart, Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  public title: string = '';
  public isLoggedIn: boolean = this.authService.isLoggedIn();
  public userName: string = this.authService.currentUser?.userName;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    router.events.subscribe((routerEvent: RouterEvent) => {
      this.setTitle(routerEvent);
    });
  }

  setTitle(routerEvent: RouterEvent) {
    if (routerEvent instanceof NavigationStart) {
      this.title = this.router.routerState.snapshot.url.slice(1).toUpperCase();
    }
  }
}
