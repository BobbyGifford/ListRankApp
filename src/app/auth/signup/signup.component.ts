import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { SignInService } from "app/auth/sign.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signin: SignInService, 
  private router: Router) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.signin.signUp(email, password);

    this.router.navigate(['driver']);


    form.reset();
  
  }


}
