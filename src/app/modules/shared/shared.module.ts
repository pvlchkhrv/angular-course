import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {CardComponent} from './components/card/card.component';
import {MatIconModule} from '@angular/material/icon';
import {FavouritesListComponent} from './components/favourites-list/favourites-list.component';
import {RouterModule} from '@angular/router';
import {ModalComponent} from './components/modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EmailControlComponent } from './components/email-control/email-control.component';
import { PassGroupComponent } from './components/pass-group/pass-group.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [CardComponent, FavouritesListComponent, ModalComponent, EmailControlComponent, PassGroupComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatDialogModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [MatButtonModule, CardComponent, FavouritesListComponent, PassGroupComponent]
})
export class SharedModule {
}
