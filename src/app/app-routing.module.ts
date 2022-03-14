import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationShellComponent} from './modules/auth/containers/registration-shell/registration-shell.component';
import {LoginShellComponent} from './modules/auth/containers/login-shell/login-shell.component';
import {ShellComponent} from './core/containers/shell/shell.component';
import {AuthGuard} from './modules/auth/services/auth.guard';
import {VehiclesListShellComponent} from './modules/vehicles/containers/vehicles-list-shell/vehicles-list-shell.component';
import {UserListShellComponent} from "./modules/users/containers/user-list-shell/user-list-shell.component";

const appRoutes: Routes = [
  {path: 'login', component: LoginShellComponent},
  {path: 'registration', component: RegistrationShellComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'users',
        canLoad: [AuthGuard],
        loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'vehicles',
        canLoad: [AuthGuard],
        component: VehiclesListShellComponent,
        loadChildren: () => import('./modules/vehicles/vehicles.module').then(m => m.VehiclesModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
