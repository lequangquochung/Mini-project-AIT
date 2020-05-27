import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// 

import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { CustomerAccountListComponent } from './customer-account-list/customer-account-list.component';
//services
import {CustomerAccountService} from './shared/customer-account.service';
import {JobService} from './shared/job.service';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { JobCreateComponent } from './job-create/job-create.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material Modules
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';




@NgModule({
   declarations: [
      AppComponent,
      CustomerAccountComponent,
      CustomerAccountListComponent,
      CustomerAccountListComponent,
      DashboardComponent,
      CustomerDetailComponent,
      CustomerEditComponent,
      JobCreateComponent,
      JobListComponent,
      JobEditComponent,
      JobDetailComponent,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      Ng2SearchPipeModule,
      NgxPaginationModule,
      BrowserAnimationsModule
   ],
   providers: [
      CustomerAccountService,
      JobService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
