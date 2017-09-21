import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from "app/auth/signup/signup.component";
import { SigninComponent } from "app/auth/signin/signin.component";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "app/auth/auth-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule

  ],
  declarations: [
    SignupComponent,
    SigninComponent,
  ]
})
export class AuthModule { }
