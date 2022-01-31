import {NgModule} from '@angular/core';
import {SecondPageShellComponent} from '../containers/second-page/second-page-shell.component';
import {BrowserModule} from "@angular/platform-browser";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SecondPageShellComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    FormsModule
  ],
  exports: [SecondPageShellComponent]
})

export class SecondPageModule {
}
