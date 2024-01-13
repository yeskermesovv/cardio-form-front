import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserFormComponent} from "./user-form/user-form.component";
import {QuestionaireComponent} from "./questionaire/questionaire.component";
import {ThanksComponent} from "./thanks/thanks.component";

export const appRoutes: Routes = [
  { path: 'form', component: UserFormComponent },
  { path: 'questionnaire', component: QuestionaireComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }, // default route
];
