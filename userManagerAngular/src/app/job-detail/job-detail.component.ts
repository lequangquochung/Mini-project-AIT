import { Customer } from './../Models/customer.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//
import { Job } from './../Models/job.model';
//service
import {JobService} from '../shared/job.service';
import {CustomerAccountService} from '../shared/customer-account.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  @Input() job: Job
  p: number = 1;
  index: number = 1;

  // customerList: any;
  customer: Customer;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private jobService: JobService,
              private customerAccountService: CustomerAccountService) { }

  ngOnInit() {
    this.getJobById();
    this.getCustomerByJobId();
  }

  getJobById(): void {
    // const customer_id = +this.route.snapshot.params.get('customer_id');
    const job_id = +this.route.snapshot.paramMap.get('job_id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.jobService.getJobById(job_id).subscribe(job => this.job = job);       
  }

  getCustomerByJobId() {
    const job_id = +this.route.snapshot.paramMap.get('job_id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);    
    this.customerAccountService.getCustomerByJobId(job_id).subscribe(customer => this.customer = customer);      
  }

  

  
  
  // deleteCustomer() {
  //   this.customerAccountService.deleteCustomter(customer_id).subscribe();
  //   alert("successfully");
  // }
  
  goBack(){
    this.location.back();
  }

}
