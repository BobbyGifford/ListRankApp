import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoutingModule } from "app/routing";
import { IndividualService } from "app/full-list/individual-service.service";
import { DataBaseService } from "app/full-list/data-base.service";
import { SignInService } from "app/auth/sign.service";
import { FullListModule } from "app/full-list/full-list.module";
import { AuthModule } from "app/auth/auth.module";
import { CoreModule } from "app/core/core.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    FullListModule,
    AuthModule,
    CoreModule
  ],
  providers: [IndividualService, DataBaseService, SignInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
