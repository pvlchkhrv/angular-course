import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {UsersModule} from './modules/users/users.module';
import {ToolbarComponent} from './core/components/toolbar/toolbar.component';
import {TabGroupComponent} from './core/components/tab-group/tab-group.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UsersPageComponent} from './core/pages/users-page/users-page.component';
import {AddUserPageComponent} from './core/pages/add-user-page/add-user-page.component';
import {VehiclesPageComponent} from './core/pages/vehicles-page/vehicles-page.component';
import {EditUserPageComponent} from './core/pages/edit-user-page/edit-user-page.component';
import {ProgressBarComponent} from './core/components/progress-bar/progress-bar.component';
import {VehiclesModule} from './modules/vehicles/vehicles.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TabGroupComponent,
    UsersPageComponent,
    AddUserPageComponent,
    VehiclesPageComponent,
    EditUserPageComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    UsersModule,
    VehiclesModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
