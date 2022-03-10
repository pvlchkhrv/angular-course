import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationShellComponent} from './modules/auth/containers/registration-shell/registration-shell.component';
import {LoginShellComponent} from './modules/auth/containers/login-shell/login-shell.component';
import {ShellComponent} from './core/containers/shell/shell.component';
import {UsersShellComponent} from './modules/users/containers/users-shell/users-shell.component';
import {AuthGuard} from './modules/auth/services/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {path: 'registration', component: RegistrationShellComponent},
      {path: 'login', component: LoginShellComponent},
      {
        path: 'users',
        component: UsersShellComponent,
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),

      },
      {path: '', redirectTo: 'login', pathMatch: 'full'},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
