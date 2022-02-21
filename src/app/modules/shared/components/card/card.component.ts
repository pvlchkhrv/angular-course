import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICard} from '../../models/card.model';
import {FavouritesService} from "../../services/favourites.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardComponent implements OnInit{
  @Input() public card: ICard;
  @Output() private onAddToFavouritesClick = new EventEmitter();

  constructor(private favouriteService: FavouritesService, private router: Router, private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
  }

  handleEditUserButtonCLick() {
    this.router.navigate(['/edit-user', this.card.id], { relativeTo: this.activatedRoute})
  }

  public handleAddToFavouritesClick(): void {
    this.favouriteService.favouriteAdded.emit(this.card);
  }
}
