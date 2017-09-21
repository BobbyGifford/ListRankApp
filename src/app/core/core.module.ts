import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "app/shared/shared.module";
import { RoutingModule } from "app/routing";
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    RoutingModule,
    HeaderComponent
  ]
})
export class CoreModule { }
