import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { IndividualService } from "app/full-list/individual-service.service";
import { Individual } from "app/full-list/individual.model";
import 'rxjs/Rx';
import { SignInService } from "app/auth/sign.service";

@Injectable()
export class DataBaseService {
  

  constructor(private http: Http, private service: IndividualService,
  private signService: SignInService) { }

saveInfo(){
  // const token = this.signService.getToken();

  this.http.put("" 
  // + token
  ,this.service.getIndividuals()).subscribe(
  (response: Response) => {
    console.log(response);
  }
);
}

loadInfo(){
  // const token = this.signService.getToken();
  
  return this.http.get(""
  ).map(
    (response: Response) => {
      const people: Individual[] = response.json();
      return people;
    })
  .subscribe( (data: Individual[]) => {
    this.service.loadList(data);
    console.log(data);
  }
  );
}
}
