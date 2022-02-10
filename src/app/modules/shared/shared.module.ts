import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CardComponent} from './components/card/card.component';
import {MatIconModule} from '@angular/material/icon';
import { FavouritesListComponent } from './components/favourites-list/favourites-list.component';

@NgModule({
  declarations: [CardComponent, FavouritesListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [MatButtonModule, CardComponent, FavouritesListComponent]
})
export class SharedModule { }
