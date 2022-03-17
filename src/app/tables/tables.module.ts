import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TablesShellComponent } from './containers/tables-shell/tables-shell.component';
import { TableFrontShellComponent } from './containers/table-front-shell/table-front-shell.component';
import { TableBackShellComponent } from './containers/table-back-shell/table-back-shell.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    TablesShellComponent,
    TableFrontShellComponent,
    TableBackShellComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    // TablesLazyServiceModule
  ],
  exports: [
    TablesShellComponent
  ],
})

export class TablesModule {}
