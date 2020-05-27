

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';


//model
import { Job } from './../Models/job.model';

//services
import { JobService } from './../shared/job.service';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  job: any;
  p: number = 1;

  constructor(private jobService: JobService,
    private location: Location) { }

  ngOnInit() {
    this.jobService.getJobList().subscribe(
      (job) => {
        console.log(job)
        this.job = job;
      }
    );
  }
  deleteJob(job_id) {
    this.cancel();
    this.jobService.deleteJob(job_id).subscribe(
      (data)=> { console.log(data) }
    );
  }



  cancel(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted!',
          'success'
        ),
          this.ngOnInit();
      }
    })
  }
  goBack(): void {
    this.location.back();
  }

}
