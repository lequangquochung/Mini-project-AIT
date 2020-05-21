import { Customer } from './../Models/customer.model';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler ,HttpHeaders} from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Observable, of } from 'rxjs';
import { NgForm } from '@angular/forms';
import { catchError, tap, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerAccountService {

constructor(private http: HttpClient) { }

//GET API: Customer Account List
getCustomerList(): Observable<Customer[]>{
  return this.http.get<Customer[]>(environment.apiBaseURL+'/customer/AllCustomer');
}

getCustomerById (customer_id: number): Observable<Customer>{
  const url = `${environment.apiBaseURL}/customer/customerbyid/${customer_id}`;
  return this.http.get<Customer>(url).pipe(
    tap(selected => console.log(`selected = ${JSON.stringify(selected)}`)),
    // catchError(error => of(new Customer))
  );
}



createCustomer(customer: Customer){
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.http.post(environment.apiBaseURL + '/customer/createnewcustomer',customer);
}


deleteCustomer(customer_id: number): Observable<void> {
  return this.http.delete<void>(`${environment.apiBaseURL}/customer/deletecustomer/${customer_id}`);
      
}


// putCustomer(customer: Customer){
//   return this.http.put(environment.apiBaseURL + 'customer/editcustomer/'+ customer.customer_id, customer);
// }
}
