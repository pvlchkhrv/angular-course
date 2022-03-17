import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureImportedOnceModule } from './import.guard';
import { ShellComponent } from './containers/shell/shell.component';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [
    ShellComponent,
    ToolbarComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
  ],
  exports: [
    ShellComponent,
    ToolbarComponent,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ]
})

export class CoreModule extends EnsureImportedOnceModule {
  public constructor(@SkipSelf() @Optional() parent: CoreModule) {
    super(parent);
  }
}
