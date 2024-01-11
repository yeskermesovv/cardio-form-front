import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserFormComponent} from "./user-form/user-form.component";

const routes: Routes = [
  { path: 'questionnaire', component: UserFormComponent },
  // Add more routes here
  { path: '', redirectTo: '/questionnaire', pathMatch: 'full' }, // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
