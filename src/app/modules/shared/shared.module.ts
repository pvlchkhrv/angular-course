import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {UserItemComponent} from '../users/components/user-list/user-item/user-item.component';
import {CardComponent} from './components/card/card.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [MatButtonModule, CardComponent]
})
export class SharedModule { }
