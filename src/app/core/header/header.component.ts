import { Component } from '@angular/core';
import { DataBaseService } from "app/full-list/data-base.service";
import { SignInService } from "app/auth/sign.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(private service: DataBaseService, private signService: SignInService) { }

onSave(){
  this.service.saveInfo();
}

onLoad(){
  this.service.loadInfo();
}

onSignout(){
  this.signService.signOut();
}

}
