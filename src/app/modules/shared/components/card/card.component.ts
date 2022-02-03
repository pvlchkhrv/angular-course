import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from '../../../users/models/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent implements OnInit{
  @Input() user: UserModel;
  @Output() toggle = new EventEmitter<boolean>();
  public isActivated: boolean;

  ngOnInit() {
    this.isActivated = this.user.activated;
  }

  toggleActivity() {
    this.toggle.emit(!this.isActivated);
  }
}
