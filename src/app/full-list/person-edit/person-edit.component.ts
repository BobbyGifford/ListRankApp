import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Individual } from "app/full-list/individual.model";
import { IndividualService } from "app/full-list/individual-service.service";
import { DataBaseService } from "app/full-list/data-base.service";

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {
rating = ['1', '2', '3', '4', '5'];
id: number;

  constructor(private route: ActivatedRoute, 
  private router: Router,
  private service: IndividualService,
  private dbService: DataBaseService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.id = +params['id'];
    }
    )
  }

  onSubmit(form: NgForm){
  var newImgPath = '';
  if(form.value.imgPath.toLowerCase() == 'na'){
    newImgPath = 'https://s-media-cache-ak0.pinimg.com/736x/c5/37/7b/c5377b4f65cfce41871910712fdcf07e.jpg';
  }

  else{
    newImgPath = form.value.imgPath;
  }
  const newIndividual = new Individual(form.value.name, form.value.description, 
  form.value.rating, newImgPath);

  this.service.addIndividuals(newIndividual);
  this.dbService.saveInfo();

  form.reset();

  this.router.navigate(['/driver']);

}

reset(form: NgForm){
  form.reset();

}


}
