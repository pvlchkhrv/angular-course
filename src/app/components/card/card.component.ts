import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from '../../services/users.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent {
  @Input() user: IUser | undefined;
  @Output() isUserActivated = new EventEmitter<boolean>()

  deactivate() {
    if (this.user && this.user.age >= 18) this.user.activated = !this.user.activated;
    this.isUserActivated.emit(this.user && this.user.activated);
  }
}
