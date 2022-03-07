import {Component, Input, OnInit} from '@angular/core';
import {ICard} from '../../../shared/models/card.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() public userCard: ICard;

  constructor() {
  }

  public ngOnInit(): void {
  }
}
