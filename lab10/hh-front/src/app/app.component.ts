import {Component, OnInit} from '@angular/core';
import {Company, Vacancy} from "./models";
import {CompanyService} from "./company.service";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hh-front';

  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  newCompanyName: string = '';
  newCompanyDesc: string = '';
  newCompanyAddress: string = '';
  newCompanyCity: string = '';
  constructor(private companyService: CompanyService) {
  }
  ngOnInit() {
    this.companyService.getCompanies().subscribe((data: Company[])=> {
      if (data.length != 0) {
        console.log("empty")
      } else {

      }
      this.companies =data
    })
  }
  addCompany () {
    this.companyService.addCompany(this.newCompanyName, this.newCompanyDesc, this.newCompanyCity, this.newCompanyAddress).subscribe(
      (data: Company) => {
        this.companies.push(data);
        this.newCompanyName = '';
        this.newCompanyDesc = '';
        this.newCompanyCity = '';
        this.newCompanyAddress = '';
      }
    )
  }
  deleteCompany(id: number) {
    this.companyService.deleteCompany(id).subscribe((data) => {
      this.companies = this.companies.filter((company) => company.id!=id)
    })
  }
}
