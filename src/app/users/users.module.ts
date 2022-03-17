import { NgModule } from '@angular/core';
import { UserListShellComponent } from './containers/user-list-shell/user-list-shell.component';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserShellComponent } from './containers/add-user-shell/add-user-shell.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserDetailsFormComponent } from './components/user-details-form/user-details-form.component';
import { FormValidationService } from "./services/form-validation.service";
import { UserAddressesComponent } from './components/user-addresses/user-addresses.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserDetailsShellComponent } from './containers/user-details-shell/user-details-shell.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';

@NgModule({
  declarations: [
    UserListShellComponent,
    UserListComponent,
    UserItemComponent,
    AddUserShellComponent,
    UserDetailsFormComponent,
    UserAddressesComponent,
    UserAddressComponent,
    EditUserShellComponent,
    UserDetailsShellComponent,
    PersonalInfoComponent,
    ContactsComponent,
    CompanyInfoComponent,
    UserSearchComponent,
  ],
  imports: [
    SharedModule,
    UsersRoutingModule,
  ],
  providers: [FormValidationService],
  exports: [
    UserListShellComponent,
    AddUserShellComponent,
    EditUserShellComponent
  ]
})

export class UsersModule {}
