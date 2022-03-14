import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ToolbarComponent} from './core/components/toolbar/toolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {HttpClientModule} from '@angular/common/http';
import {AuthModule} from "./modules/auth/auth.module";
import {ShellComponent} from "./core/containers/shell/shell.component";
import {TabGroupComponent} from "./core/components/tab-group/tab-group.component";
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ShellComponent,
    TabGroupComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressBarModule,
    HttpClientModule,
    MatTabsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
