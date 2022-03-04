import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExitEditPageGuard} from "./modules/users/exit-edit-page.guard";
import {RegistrationShellComponent} from "./modules/auth/containers/registration-shell/registration-shell.component";
import {LoginShellComponent} from "./modules/auth/containers/login-shell/login-shell.component";
import {UserListShellComponent} from "./modules/users/containers/user-list-shell/user-list-shell.component";
import {AddUserShellComponent} from "./modules/users/containers/add-user-shell/add-user-shell.component";
import {EditUserShellComponent} from "./modules/users/containers/edit-user-shell/edit-user-shell.component";
import {VehiclesListShellComponent} from "./modules/vehicles/containers/vehicles-list-shell/vehicles-list-shell.component";

const routes: Routes = [
  {path: 'users', component: UserListShellComponent},
  {path: 'add-user', component: AddUserShellComponent},
  {path: 'edit-user/:id', component: EditUserShellComponent, canDeactivate:[ExitEditPageGuard]},
  {path: 'vehicles', component: VehiclesListShellComponent},
  // {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'registration', component: RegistrationShellComponent},
  {path: 'login', component: LoginShellComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
