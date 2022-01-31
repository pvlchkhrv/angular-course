import {NgModule} from '@angular/core';
import {FirstPageShellComponent} from '../containers/first-page/first-page-shell.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    FirstPageShellComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MatButtonModule,
  ],
  exports: [FirstPageShellComponent]
})

export class FirstPageModule {}
