import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersPageComponent} from './core/pages/users-page/users-page.component';
import {AddUserPageComponent} from './core/pages/add-user-page/add-user-page.component';
import {VehiclesPageComponent} from './core/pages/vehicles-page/vehicles-page.component';
import {EditUserPageComponent} from './core/pages/edit-user-page/edit-user-page.component';
import {ExitEditPageGuard} from "./modules/users/guards/exit-edit-page.guard";

const routes: Routes = [
  {path: 'users', component: UsersPageComponent},
  {path: 'add-user', component: AddUserPageComponent},
  {path: 'edit-user/:id', component: EditUserPageComponent, canDeactivate:[ExitEditPageGuard]},
  {path: 'vehicles', component: VehiclesPageComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
