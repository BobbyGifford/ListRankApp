import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { FullListComponent } from "app/full-list/full-list.component";
import { PersonListComponent } from "app/full-list/person-list/person-list.component";
import { PersonDetailsComponent } from "app/full-list/person-details/person-details.component";
import { IndividualComponent } from "app/full-list/person-list/individual/individual.component";
import { PageDriverComponent } from "app/full-list/page-driver/page-driver.component";
import { PersonEditComponent } from "app/full-list/person-edit/person-edit.component";
import { SharedModule } from "app/shared/shared.module";
import { ListRouting } from "app/full-list/list-routing";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ListRouting,
    FormsModule
  ],
  declarations: [
    FullListComponent,
    PersonListComponent,
    PersonDetailsComponent,
    IndividualComponent,
    PageDriverComponent,
    PersonEditComponent,
  ]
})
export class FullListModule { }
