import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Company, Vacancy} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://localhost:8000'
  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(
      `${this.BASE_URL}/api/companies`
    )
  }
  addCompany(name: string, desc: string, city: string, address: string): Observable<Company> {
    return this.client.post<Company>(
      `${this.BASE_URL}/api/companies/`,
      {name: name, desc: desc, city: city, address: address}
    )
  }
  getVacancies(companyId: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/companies/${companyId}/vacancies`
    )
  }
  deleteCompany(id: number): Observable<any> {
    return this.client.delete<any>(
      `${this.BASE_URL}/api/companies/${id}/`
    )
  }
}
