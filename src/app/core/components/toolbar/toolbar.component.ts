import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../modules/auth/services/auth.service';
import {NavigationStart, Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{
  public title: string;
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

  ngOnInit() {
    console.log(this.isLoggedIn)
  }

  setTitle(routerEvent: RouterEvent) {
    if (routerEvent instanceof NavigationStart) {
      this.title = this.router.routerState.snapshot.url.slice(1).toUpperCase();
    }
  }
}
