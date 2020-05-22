import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';

//model
import { Customer } from '../Models/customer.model';

//service
import { JobService } from '../shared/job.service';
import { CustomerAccountService } from '../shared/customer-account.service';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.css']
})
export class CustomerAccountComponent implements OnInit {

  jobList = [];
  // customerForm: FormArray = this.fb.array([]);
  customerForm: FormGroup;
  urlImage: any;
  base64textString: string;
  constructor(private jobService: JobService,
              private customerAccountService: CustomerAccountService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: ['Male'],
      address: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: ['', Validators.required],
      description: ['', Validators.required],
      job_id: [1],
      imgUrl: ['']
    });

    this.jobService.getJobList().subscribe(
      res => this.jobList = res as []
    );
  }

  onFormSubmit() {
    let customer = this.customerForm.value;
    this.createCustomer(customer);
    this.customerForm.reset();
  }

  createCustomer(customer: Customer) {
    if(this.urlImage){
      customer.imgUrl = this.urlImage;
    }
    console.log(customer);
    this.customerAccountService.createCustomer(customer).subscribe();
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]); // read file as data url

  reader.onload = (event) => { // called once readAsDataURL is completed
    this.urlImage = (event.target as any).result;
  }
    }
  }


}
