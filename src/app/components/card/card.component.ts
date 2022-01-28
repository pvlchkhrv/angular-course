import {Component, Input} from '@angular/core';
import {IUser} from '../../first-page/first-page.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() user: IUser | undefined;

  hide() {
    if (this.user) this.user.activated = !this.user.activated
  }
}
