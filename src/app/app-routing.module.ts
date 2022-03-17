import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationShellComponent } from './auth/containers/registration-shell/registration-shell.component';
import { LoginShellComponent } from './auth/containers/login-shell/login-shell.component';
import { ShellComponent } from './core/containers/shell/shell.component';
import { AuthGuard } from './auth/services/auth.guard';
import { VehiclesListShellComponent } from './vehicles/containers/vehicles-list-shell/vehicles-list-shell.component';
import { TablesShellComponent } from './tables/containers/tables-shell/tables-shell.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginShellComponent},
  {path: 'registration', component: RegistrationShellComponent},
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'vehicles',
        component: VehiclesListShellComponent,
        loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule),
      },
      {
        path: 'tables',
        component: TablesShellComponent,
        loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule),
      },
      {path: '', pathMatch: 'full', redirectTo: '/users'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
