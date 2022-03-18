import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TablesShellComponent} from './containers/tables-shell/tables-shell.component';

const tablesRoutes: Routes = [
  {
    path: '',
    component: TablesShellComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(tablesRoutes)],
  exports: [RouterModule]
})
export class TablesRoutingModule {
}
