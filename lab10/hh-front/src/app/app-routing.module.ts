import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";

const routes: Routes = [
  {path: 'companies/:companyId', component: VacanciesComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
