import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomDateAdapter, UserFormComponent} from './user-form/user-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule, MAT_DATE_FORMATS } from "@angular/material/core";
import * as moment from 'moment';
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatDividerModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru' },
    { provide: DateAdapter, useClass: CustomDateAdapter }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
