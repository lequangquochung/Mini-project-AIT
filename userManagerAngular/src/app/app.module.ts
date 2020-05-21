import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

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

@NgModule({
   declarations: [
      AppComponent,
      CustomerAccountComponent,
      CustomerAccountListComponent,
      CustomerAccountListComponent,
      DashboardComponent,
      CustomerDetailComponent,
      CustomerEditComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule
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
