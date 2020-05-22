import { Customer } from './../Models/customer.model';
import { CustomerAccountService } from './../shared/customer-account.service';
import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {  
  @Input() customer: Customer
  constructor(  private route: ActivatedRoute,
                private location: Location,
                private customerAccountService: CustomerAccountService) { }

  ngOnInit() {
    this.getCustomerById();
  }

  getCustomerById(): void {
    // const customer_id = +this.route.snapshot.params.get('customer_id');
    const customer_id = +this.route.snapshot.paramMap.get('customer_id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.customerAccountService.getCustomerById(customer_id).subscribe(customer => this.customer = customer);       
  }
  deleteCustomer(customer_id) {
    this.customerAccountService.deleteCustomter(customer_id).subscribe();
    alert("successfully");
  }
  
  goBack(){
    this.location.back();
  }

}
