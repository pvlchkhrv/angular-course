import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ICard} from '../../../shared/models/card.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @Input() public usersAsCards: ICard[];
  @Input() public favourites: ICard[];
}
