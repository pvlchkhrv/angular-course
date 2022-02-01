import {NgModule} from '@angular/core';
import {UserListShellComponent} from './containers/user-list-shell/user-list-shell.component';
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from '../shared/shared.module';
import {UserListComponent} from './components/user-list/user-list.component';
import {UsersService} from './services/users.service';

@NgModule({
  declarations: [
    UserListShellComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
  ],
  providers: [UsersService],
  exports: [UserListShellComponent]
})

export class UsersModule {}
