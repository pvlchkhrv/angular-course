import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {UserItemComponent} from '../users/components/user-list/user-item/user-item.component';

@NgModule({
  declarations: [UserItemComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [UserItemComponent, MatButtonModule]
})
export class SharedModule { }
