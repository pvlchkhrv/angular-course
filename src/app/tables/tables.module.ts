import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TablesShellComponent } from './containers/tables-shell/tables-shell.component';
import { TableFrontShellComponent } from './containers/table-front-shell/table-front-shell.component';
import { TableBackShellComponent } from './containers/table-back-shell/table-back-shell.component';
import { TableComponent } from './components/table/table.component';
import { TableBackComponent } from './components/table-back/table-back.component';
import {TablesRoutingModule} from './tables-routing.module';

@NgModule({
  declarations: [
    TablesShellComponent,
    TableFrontShellComponent,
    TableBackShellComponent,
    TableComponent,
    TableBackComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TablesRoutingModule
  ],
  exports: [
    TablesShellComponent
  ],
})

export class TablesModule {}
