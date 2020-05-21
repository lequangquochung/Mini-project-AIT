import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JobService {

constructor(private http: HttpClient) { }

getJobList(){
  return this.http.get(environment.apiBaseURL + '/Jobs/JobList');
}
}
