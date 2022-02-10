import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICard} from '../../models/card.model';
import {FavouritesService} from "../../services/favourites.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent implements OnInit{
  @Input() public card: ICard;
  @Output() private onAddToFavouritesClick = new EventEmitter();

  constructor(private favouriteService: FavouritesService) {}

  public ngOnInit(): void {
  }

  public handleAddToFavouritesClick(): void {
    this.favouriteService.favouriteAdded.emit(this.card);
  }
}
