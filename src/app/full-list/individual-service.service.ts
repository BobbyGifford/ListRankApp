import { Injectable } from '@angular/core';
import { Individual } from "app/full-list/individual.model";
import { Subject } from "rxjs/Subject";

@Injectable()
export class IndividualService { 
  fullListChange = new Subject<Individual[]>();

  private people: Individual[] = [
  //new Individual('Basset Hound', 'A very nice breed of dog.', 5, 'https://vetstreet.brightspotcdn.com/dims4/default/8293303/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F0e%2F9f%2F74334f874e899e8e8a6a33752c91%2Fbasset-hound-AP-0T0WDB-645sm12913.jpg')
  ];

  getIndividuals(){
    return this.people;
  }

  getIndividual(id: number){
    return this.people[id];
  }

  addIndividuals(individual: Individual){
    this.people.push(individual);
    this.fullListChange.next(this.people.slice());
  }

  deleteIndividual(id: number){
    this.people.splice(id, id+1);
    this.fullListChange.next(this.people.slice());

  }

  loadList(list: Individual[]){
    this.people = list;
    this.fullListChange.next(this.people.slice());
  }


}
