import {NgModule} from '@angular/core';
import {UserListShellComponent} from './containers/user-list-shell/user-list-shell.component';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../shared/shared.module';
import {UserListComponent} from './components/user-list/user-list.component';
import {AddUserShellComponent} from './containers/add-user-shell/add-user-shell.component';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {ReactiveFormsModule} from '@angular/forms';
import {UserItemComponent} from './components/user-item/user-item.component';
import { UserDetailsFormComponent } from './components/user-details/user-details-form.component';
import {FormValidationService} from "./services/form-validation.service";
import { UserAddressesComponent } from './components/user-addresses/user-addresses.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';

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
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  providers: [FormValidationService],
  exports: [UserListShellComponent, AddUserShellComponent, EditUserShellComponent]
})

export class UsersModule {}
