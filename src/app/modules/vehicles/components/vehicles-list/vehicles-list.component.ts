import {Component, Input, OnInit} from '@angular/core';
import {ICard} from '../../../shared/models/card.model';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {
  @Input() public vehicles: ICard[];
  @Input() public favourites: ICard[];

  constructor() { }

  public ngOnInit(): void {
  }

}
