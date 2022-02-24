import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CardComponent} from './components/card/card.component';
import {MatIconModule} from '@angular/material/icon';
import { FavouritesListComponent } from './components/favourites-list/favourites-list.component';
import {RouterModule} from "@angular/router";
import { ModalComponent } from './components/modal/modal.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [CardComponent, FavouritesListComponent, ModalComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatDialogModule
  ],
  exports: [MatButtonModule, CardComponent, FavouritesListComponent]
})
export class SharedModule { }
