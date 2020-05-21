import { JobService } from './../shared/job.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Customer } from './../Models/customer.model';
import { CustomerAccountService } from './../shared/customer-account.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  jobList = [];
  // customerForm: FormArray = this.fb.array([]);
  customerForm: FormGroup;
  urlImage: any;
  base64textString: string;
  customer: Customer;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private customerAccountService: CustomerAccountService,
    private jobService: JobService
    ) { }

  ngOnInit() {
    const customer_id = +this.route.snapshot.paramMap.get('customer_id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
     this.customerAccountService.getCustomerById(customer_id).subscribe((customer) => { 
      this.customerForm = this.fb.group({
        first_name: [customer.first_name, Validators.required],
        last_name: [customer.last_name, Validators.required],
        gender: ['Male'],
        address: [customer.address, Validators.required],
        city: [customer.city, Validators.required],
        email: [customer.email, Validators.required],
        phone_number: [customer.phone_number, Validators.required],
        description: [customer.description, Validators.required],
        job_id: [1],
        imgUrl: [customer.imgUrl]
      });
      if(customer.imgUrl !== null ){
        this.urlImage = customer.imgUrl;
      }
      else{
        customer.imgUrl = '../assets/img/default.png';
      }
     
     });

    //job Service
    this.jobService.getJobList().subscribe(
      res => this.jobList = res as []
    );
  }

  onFormSubmit() {
    let customer = this.customerForm.value;
    this.createCustomer(customer);
    alert("successfully")
    this.customerForm.reset();
  }

  createCustomer(customer: Customer) {
    if(this.urlImage){
      customer.imgUrl = this.urlImage;
    }
    console.log(customer);
    this.customerAccountService.createCustomer(customer).subscribe();
  }

  
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.urlImage = (event.target as any).result;
      }
    }
  }

}
