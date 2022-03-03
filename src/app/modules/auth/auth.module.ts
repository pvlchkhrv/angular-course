import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationShellComponent } from './containers/registration-shell/registration-shell.component';
import { LoginShellComponent } from './containers/login-shell/login-shell.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    RegistrationShellComponent,
    LoginShellComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LoginShellComponent, RegistrationShellComponent]
})
export class AuthModule { }
