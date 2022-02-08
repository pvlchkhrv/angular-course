import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICard} from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent implements OnInit{
  @Input() public item: ICard;
  @Output() private onAddToFavouritesClick = new EventEmitter();

  public ngOnInit(): void {
  }

  public handleAddToFavouritesClick(): void {
    this.onAddToFavouritesClick.emit();
  }
}
