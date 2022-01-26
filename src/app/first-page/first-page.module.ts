import {NgModule} from '@angular/core';
import {FirstPageComponent} from './first-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {BrowserModule} from "@angular/platform-browser";
import {CardComponent} from "../components/card/card.component";

@NgModule({
  declarations: [
    FirstPageComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
  ],
  bootstrap: [FirstPageComponent],
  exports: [FirstPageComponent]
})

export class FirstPageModule {}
