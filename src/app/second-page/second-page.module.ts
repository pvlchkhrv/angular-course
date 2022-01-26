import {NgModule} from '@angular/core';
import {SecondPageComponent} from './second-page.component';
import {BrowserModule} from "@angular/platform-browser";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SecondPageComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    FormsModule
  ],
  bootstrap: [SecondPageComponent],
  exports: [SecondPageComponent]
})

export class SecondPageModule {
}
