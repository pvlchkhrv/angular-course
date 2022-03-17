import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { FavouritesListComponent } from './components/favourites-list/favourites-list.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EmailControlComponent } from './components/email-control/email-control.component';
import { PassGroupComponent } from './components/pass-group/pass-group.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { TransformFullNamePipe } from '../core/pipes/transform-full-name.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TabGroupComponent } from './components/tab-group/tab-group.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TransformAddressPipe } from '../core/pipes/transform-address.pipe';

const materialModules = [
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
  MatIconModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatTabsModule,
  MatButtonModule,
  MatMenuModule,
  MatOptionModule,
  MatSelectModule,
  MatRadioModule,
  MatPaginatorModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatSortModule
]

@NgModule({
  declarations: [
    CardComponent,
    FavouritesListComponent,
    ModalComponent,
    PassGroupComponent,
    EmailControlComponent,
    TabGroupComponent,

    TransformAddressPipe,
    TransformFullNamePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    ...materialModules
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    TransformFullNamePipe,
    TransformAddressPipe,

    CardComponent,
    FavouritesListComponent,
    ModalComponent,
    PassGroupComponent,
    TabGroupComponent,

    ...materialModules
  ]
})
export class SharedModule {}
