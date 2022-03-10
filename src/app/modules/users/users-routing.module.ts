import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListShellComponent} from './containers/user-list-shell/user-list-shell.component';
import {AddUserShellComponent} from './containers/add-user-shell/add-user-shell.component';
import {EditUserShellComponent} from './containers/edit-user-shell/edit-user-shell.component';
import {ExitEditPageGuard} from './exit-edit-page.guard';
const userRoutes: Routes = [
      {path: '', component: UserListShellComponent},
      {path: 'add-user', component: AddUserShellComponent},
      {path: 'edit-user/:id', component: EditUserShellComponent, canDeactivate:[ExitEditPageGuard]},
      {path: '', redirectTo: 'users', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
