import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {appRoutes} from './app-routing.module';
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
import {HttpClientModule} from "@angular/common/http";
import { QuestionaireComponent } from './questionaire/questionaire.component';
import {ExtraOptions, PreloadAllModules, RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";

const routerConfig: ExtraOptions = {
  preloadingStrategy       : PreloadAllModules,
  scrollPositionRestoration: 'enabled',
  useHash: true
};


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    QuestionaireComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, routerConfig),
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatDividerModule,
    HttpClientModule,
    MatIconModule,
    MatLegacyChipsModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru' },
    { provide: DateAdapter, useClass: CustomDateAdapter }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
