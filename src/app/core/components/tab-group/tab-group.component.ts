import {Component, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit {
  public links: string[] = ['Users', 'User Details', 'Vehicles'];
  public activeLink: string;
  public background: ThemePalette = undefined;

  constructor(private router: Router) {
  }

  public ngOnInit(): void {
  }

  public onLinkClick(link: string) {
    switch (link) {
      case this.links[0]:
        this.router.navigate(['/users']);
        break;
      case this.links[1]:
        this.router.navigate(['/users/31c8e0c9-89f8-48c7-8a95-718d3f0a6987']);
        break;
      case this.links[2]:
        this.router.navigate(['/vehicles']);
        break;
      default:
        return;
    }
  }
}
