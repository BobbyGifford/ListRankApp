import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { FullListComponent } from "app/full-list/full-list.component";
import { PageDriverComponent } from "app/full-list/page-driver/page-driver.component";
import { PersonDetailsComponent } from "app/full-list/person-details/person-details.component";
import { PersonEditComponent } from "app/full-list/person-edit/person-edit.component";
import { SignupComponent } from "app/auth/signup/signup.component";
import { SigninComponent } from "app/auth/signin/signin.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/driver', pathMatch: 'full' },
    // { path: 'driver', component: FullListComponent, children: [
    //     { path: '', component: PageDriverComponent },
    //     { path: ':id', component: PersonDetailsComponent },
    //     { path: ':id/edit', component: PersonEditComponent }

    // ] },

    // { path: 'signup', component: SignupComponent },
    // { path: 'signin', component: SigninComponent },

];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class RoutingModule{
    
}
