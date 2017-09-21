import { Component } from '@angular/core';
import { Individual } from "app/full-list/individual.model";
import { IndividualService } from "app/full-list/individual-service.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { DataBaseService } from "app/full-list/data-base.service";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent {
person: Individual;
id: number;

  constructor(
  private individualService: IndividualService, 
  private route: ActivatedRoute,
  private router: Router,
  private dbService: DataBaseService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.person = this.individualService.getIndividual(this.id);
      }
    )
  }

  onAddItem(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDelete(){
    this.individualService.deleteIndividual(this.id);
    this.router.navigate(['driver']);
    this.dbService.saveInfo();
  }

}
