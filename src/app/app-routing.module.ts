import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListShellComponent} from './modules/users/containers/user-list-shell/user-list-shell.component';
import {AddUserShellComponent} from './modules/users/containers/add-user-shell/add-user-shell.component';
import {VehiclesListShellComponent} from './modules/vehicles/containers/vehicles-list-shell/vehicles-list-shell.component';

const routes: Routes = [
  {path: '', component: UserListShellComponent},
  {path: 'users', component: UserListShellComponent},
  {path: 'add-user', component: AddUserShellComponent},
  {path: 'vehicles', component: VehiclesListShellComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
