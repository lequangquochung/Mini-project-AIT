
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Job } from './../Models/job.model';


@Injectable({
  providedIn: 'root'
})
export class JobService {

constructor(private http: HttpClient) { }

getJobList(){
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.http.get(environment.apiBaseURL + '/Jobs/JobList');
}

createJob (job: Job){
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.http.post(environment.apiBaseURL + '/Jobs/CreateNewJob',Job);
}
}
