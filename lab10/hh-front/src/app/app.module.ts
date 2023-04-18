import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { VacanciesComponent } from './vacancies/vacancies.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    VacanciesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientXsrfModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
