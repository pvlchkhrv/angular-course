import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListShellComponent} from './containers/user-list-shell/user-list-shell.component';
import {AddUserShellComponent} from './containers/add-user-shell/add-user-shell.component';
import {EditUserShellComponent} from './containers/edit-user-shell/edit-user-shell.component';
import {ExitEditPageGuard} from './exit-edit-page.guard';

const userRoutes: Routes = [
  {path: '', component: UserListShellComponent},
  {path: 'add-user', component: AddUserShellComponent},
  {path: ':id', component: EditUserShellComponent},
  {path: ':id/edit', component: EditUserShellComponent, canDeactivate: [ExitEditPageGuard]},
  {path: 'company-info', component: EditUserShellComponent},
  {path: 'contacts', component: EditUserShellComponent},

  {path: '', redirectTo: 'users', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
