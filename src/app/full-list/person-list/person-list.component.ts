import { Component, OnInit, Input } from '@angular/core';

import { Individual } from "app/full-list/individual.model";
import { IndividualService } from "app/full-list/individual-service.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { DataBaseService } from "app/full-list/data-base.service";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

people: Individual[];
subscription: Subscription;

  constructor(private service: IndividualService,
              private router: Router, 
              private route: ActivatedRoute,
              private dbService: DataBaseService) { }

  ngOnInit() {
    this.subscription = this.service.fullListChange
    .subscribe(
      (people: Individual[]) => {
        this.people = people;
      }
    )


    this.people = this.service.getIndividuals();
    this.dbService.loadInfo(); 
  }
  
ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

