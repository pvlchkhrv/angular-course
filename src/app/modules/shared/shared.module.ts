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
import {EmailControlComponent} from './components/email-control/email-control.component';
import {PassGroupComponent} from './components/pass-group/pass-group.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {TransformFullNamePipe} from "../../core/pipes/transform-full-name.pipe";

@NgModule({
  declarations: [CardComponent, FavouritesListComponent, ModalComponent, PassGroupComponent, EmailControlComponent, TransformFullNamePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    TransformFullNamePipe,
    CardComponent,
    FavouritesListComponent,
    ModalComponent,
    PassGroupComponent,

    MatDialogModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
  ]
})
export class SharedModule {
}
