import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Customer} from '../Models/customer.model';

import {CustomerAccountComponent} from '../customer-account/customer-account.component';
//service
import {CustomerAccountService} from '../shared/customer-account.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-customer-account-list',
  templateUrl: './customer-account-list.component.html',
  styleUrls: ['./customer-account-list.component.css']
})
export class CustomerAccountListComponent implements OnInit {

  customer: Customer[] = [];
  
  p: number = 1;

  

searchModel: string;
  constructor(private CustomerAccountService: CustomerAccountService) { }

  ngOnInit() {
    this.CustomerAccountService.getCustomerList().subscribe(
      (customer) => { console.log(customer)
        this.customer = customer;
      }
    );   
  }
  
 



  



}
