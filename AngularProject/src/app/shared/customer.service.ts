import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  formData: Customer;
  list: Customer[];
  readonly rootURL = "http://localhost:36348/api";

  constructor(private http: HttpClient) { }

  postCustomer(formData: Customer) {
    return this.http.post(this.rootURL + '/Customer', formData);
  }

  putCustomer(formData: Customer) {
    return this.http.put(this.rootURL + '/Customer/' + formData.CustomerId, formData);
  }

  getCustomerList(userId: number) {  
    debugger;  
    this.http.get(this.rootURL + '/Customer/GetCustomers/' + userId)
      .toPromise().then(res => this.list = res as Customer[]);
  }

  deleteCustomer(id: number) {
    return this.http.delete(this.rootURL + '/Customer/' + id);
  }
}
