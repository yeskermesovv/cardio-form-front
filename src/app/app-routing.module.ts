import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserFormComponent} from "./user-form/user-form.component";
import {QuestionaireComponent} from "./questionaire/questionaire.component";

export const appRoutes: Routes = [
  { path: 'form', component: UserFormComponent },
  { path: 'questionnaire', component: QuestionaireComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }, // default route
];
