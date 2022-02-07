import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {UsersModule} from './modules/users/users.module';
import {ToolbarComponent} from './core/components/toolbar/toolbar.component';
import {TabGroupComponent} from './core/components/tab-group/tab-group.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {VehiclesModule} from './modules/vehicles/vehicles.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TabGroupComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
