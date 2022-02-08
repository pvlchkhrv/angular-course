import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { VehiclesItemComponent } from './components/vehicles-item/vehicles-item.component';
import { VehiclesListShellComponent } from './containers/vehicles-list-shell/vehicles-list-shell.component';
import {SharedModule} from '../shared/shared.module';
import {FavouritesService} from '../shared/services/favourites.service';

@NgModule({
  declarations: [
    VehiclesListComponent,
    VehiclesItemComponent,
    VehiclesListShellComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: []
})
export class VehiclesModule { }
