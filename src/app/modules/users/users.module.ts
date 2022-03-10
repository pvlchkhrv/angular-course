import {NgModule} from '@angular/core';
import {UserListShellComponent} from './containers/user-list-shell/user-list-shell.component';
import {SharedModule} from '../shared/shared.module';
import {UserListComponent} from './components/user-list/user-list.component';
import {AddUserShellComponent} from './containers/add-user-shell/add-user-shell.component';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {ReactiveFormsModule} from '@angular/forms';
import {UserItemComponent} from './components/user-item/user-item.component';
import {UserDetailsFormComponent} from './components/user-details/user-details-form.component';
import {FormValidationService} from "./services/form-validation.service";
import {UserAddressesComponent} from './components/user-addresses/user-addresses.component';
import {UserAddressComponent} from './components/user-address/user-address.component';
import {EditUserShellComponent} from './containers/edit-user-shell/edit-user-shell.component';
import {UserSearchComponent} from './components/user-search/user-search.component';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from "@angular/material/paginator";
import {UsersRoutingModule} from './users-routing.module';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {UsersShellComponent} from './containers/users-shell/users-shell.component';
import {TabGroupComponent} from '../../core/components/tab-group/tab-group.component';

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
    UserSearchComponent,
    UsersShellComponent,
    TabGroupComponent,
  ],
  imports: [
    SharedModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule,
    UsersRoutingModule,
    CommonModule,
    MatTabsModule
  ],
  providers: [FormValidationService],
  exports: [UserListShellComponent, AddUserShellComponent, EditUserShellComponent]
})

export class UsersModule {}
