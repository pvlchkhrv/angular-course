import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListShellComponent } from './containers/user-list-shell/user-list-shell.component';
import { AddUserShellComponent } from './containers/add-user-shell/add-user-shell.component';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';
import { ExitEditPageGuard } from './exit-edit-page.guard';
import { UserDetailsShellComponent } from './containers/user-details-shell/user-details-shell.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const userRoutes: Routes = [
  {path: '', component: UserListShellComponent},
  {
    path: ':id',
    component: UserDetailsShellComponent,
    children: [
      {path: 'personal-info', component: PersonalInfoComponent},
      {path: 'company-info', component: CompanyInfoComponent},
      {path: 'contacts', component: ContactsComponent},
      {path: '', redirectTo: 'personal-info', pathMatch: 'full'},
    ]
  },
  {path: 'add-user', component: AddUserShellComponent},
  {path: 'edit-user/:id', component: EditUserShellComponent, canDeactivate: [ExitEditPageGuard]},
  // {path: '', redirectTo: 'users', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {

}
