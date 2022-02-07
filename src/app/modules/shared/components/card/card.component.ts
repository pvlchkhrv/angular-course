import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICard} from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent implements OnInit{
  @Input() item: ICard;
  @Output() onClick = new EventEmitter();

  ngOnInit() {
  }

  onAddToFavourites() {
    this.onClick.emit();
  }
}
