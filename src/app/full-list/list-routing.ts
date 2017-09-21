import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FullListComponent } from "app/full-list/full-list.component";
import { PageDriverComponent } from "app/full-list/page-driver/page-driver.component";
import { PersonDetailsComponent } from "app/full-list/person-details/person-details.component";
import { PersonEditComponent } from "app/full-list/person-edit/person-edit.component";

const listRoutes: Routes = [
    { path: 'driver', component: FullListComponent, children: [
        { path: '', component: PageDriverComponent },
        { path: ':id', component: PersonDetailsComponent },
        { path: ':id/edit', component: PersonEditComponent },

    ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(listRoutes)
  ],
  exports: [RouterModule]
})
export class ListRouting {}