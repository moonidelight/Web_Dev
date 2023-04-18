import {Component, OnInit} from '@angular/core';
import {Company, Vacancy} from "../models";
import {CompanyService} from "../company.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit{
  vacancies: Vacancy[] = [];
  companyId: number = 0;
  constructor(private route: ActivatedRoute,
              private companyService: CompanyService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((company) => {
      const id = Number(company.get('companyId'));
      this.companyService.getVacancies(id).subscribe((data: Vacancy[]) => {
        this.companyId = id;
        if (data.length == 0) {
          console.log("empty");
          this.vacancies = [];
        } else {
          this.vacancies = data;
        }
      })
    })
  }
}
