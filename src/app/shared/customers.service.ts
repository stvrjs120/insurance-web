import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  formData: Customer;
  readonly rootURL = 'http://localhost:57234/api';
  list: Customer[];

  constructor(private http: HttpClient) { }

  postCustomer(formData: Customer) {
    return this.http.post(`${this.rootURL}/Customers`, formData);
  }

  putCustomer(formData: Customer) {
    return this.http.put(`${this.rootURL}/Customers/${formData.id}`, formData);
  }

  getListCustomers() {
    this.http.get(`${this.rootURL}/Customers`)
      .toPromise()
      .then(resp => this.list = resp as Customer[]);
  }

  deleteCustomer(id: number) {
    return this.http.delete(`${this.rootURL}/Customers/${id}`);
  }
}
