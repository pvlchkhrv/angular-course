import {Component, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit {
  public links = ['Users', 'Add User'];
  public activeLink: string;
  public background: ThemePalette = undefined;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public onLinkClick(link: string) {
    switch (link) {
      case this.links[0]:
        this.router.navigate(['/users']);
        break;
      case this.links[1]:
        this.router.navigate(['/add-user']);
        break;
      default:
        return;
    }
  }
}
