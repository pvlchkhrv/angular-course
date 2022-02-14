import {NgModule} from '@angular/core';
import {UserListShellComponent} from './containers/user-list-shell/user-list-shell.component';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../shared/shared.module';
import {UserListComponent} from './components/user-list/user-list.component';
import {AddUserFormComponent} from './components/add-user-form/add-user-form.component';
import {AddUserShellComponent} from './containers/add-user-shell/add-user-shell.component';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {ReactiveFormsModule} from '@angular/forms';
import {UserItemComponent} from './components/user-item/user-item.component';
import { UserDetailsFormComponent } from './components/user-details-form/user-details-form.component';
import {FormValidationService} from "./services/form-validation.service";
import { UserAddressFormComponent } from './components/user-address-form/user-address-form.component';

@NgModule({
  declarations: [
    UserListShellComponent,
    UserListComponent,
    UserItemComponent,
    AddUserFormComponent,
    AddUserShellComponent,
    UserDetailsFormComponent,
    UserAddressFormComponent,
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
  exports: [UserListShellComponent]
})

export class UsersModule {}
