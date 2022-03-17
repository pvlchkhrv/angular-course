import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ICard} from '../../models/card.model';
import {FavouritesService} from '../../../core/services/favourites.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent {
  @Input() public card: ICard;
  @Output() private onAddToFavouritesClick = new EventEmitter<ICard>();

  constructor(
    private favouriteService: FavouritesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public handleEditUserButtonCLick(): void {
    this.router.navigate(['edit-user', this.card.id], {relativeTo: this.activatedRoute})
  }

  public handleAddToFavouritesClick(): void {
    this.favouriteService.addToFavourites(this.card);
  }
}
