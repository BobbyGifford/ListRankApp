import { Component, OnInit, Input } from '@angular/core';
import { Individual } from "app/full-list/individual.model";

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {
 @Input() person: Individual;
 @Input() id: number;


  ngOnInit() {
    
  }

}
