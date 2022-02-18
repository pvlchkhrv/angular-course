import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersPageComponent} from './core/pages/users-page/users-page.component';
import {AddUserPageComponent} from './core/pages/add-user-page/add-user-page.component';
import {VehiclesPageComponent} from './core/pages/vehicles-page/vehicles-page.component';

const routes: Routes = [
  {path: 'users', component: UsersPageComponent},
  {path: 'add-user', component: AddUserPageComponent},
  {path: 'vehicles', component: VehiclesPageComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
