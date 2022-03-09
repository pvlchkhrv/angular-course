import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationShellComponent } from './containers/registration-shell/registration-shell.component';
import { LoginShellComponent } from './containers/login-shell/login-shell.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RegistrationShellComponent,
    LoginShellComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [LoginShellComponent, RegistrationShellComponent]
})
export class AuthModule { }
