import { Injectable } from '@angular/core';
import { Insurance } from './insurance.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsurancesService {

  formData: Insurance;
  readonly rootURL = 'http://localhost:57234/api';
  list: Insurance[];

  constructor(private http: HttpClient) { }

  postInsurance(formData: Insurance) {
    return this.http.post(`${this.rootURL}/Insurances`, formData);
  }

  putInsurance(formData: Insurance) {
    return this.http.put(`${this.rootURL}/Insurances/${formData.id}`, formData);
  }

  getListInsurances() {
    this.http.get(`${this.rootURL}/Insurances`)
      .toPromise()
      .then(resp => this.list = resp as Insurance[]);
  }

  deleteInsurance(id: number) {
    return this.http.delete(`${this.rootURL}/Insurances/${id}`);
  }
}
