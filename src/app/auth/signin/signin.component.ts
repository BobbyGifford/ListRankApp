import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { SignInService } from "app/auth/sign.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private signService: SignInService) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.signService.signIn(email, password);

    form.reset();
  }

}
