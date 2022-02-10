import {Component, Input, OnInit} from '@angular/core';
import {ICard} from '../../../shared/models/card.model';

@Component({
  selector: 'app-vehicles-item',
  templateUrl: './vehicles-item.component.html',
  styleUrls: ['./vehicles-item.component.scss']
})
export class VehiclesItemComponent implements OnInit {
  @Input() public vehicle: ICard;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
