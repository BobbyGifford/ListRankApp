import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-driver',
  templateUrl: './page-driver.component.html',
  styleUrls: ['./page-driver.component.css']
})
export class PageDriverComponent implements OnInit {

@Input() showForm: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
this.showForm = !this.showForm;
  }


}
