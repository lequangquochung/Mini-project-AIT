import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//models
import {Customer} from './Models/customer.model';

import{CustomerAccountComponent} from './customer-account/customer-account.component';
import {CustomerAccountListComponent} from './customer-account-list/customer-account-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';


const routes: Routes = [
  // {path: '',redirectTo:'/dashboard',pathMatch: 'full'},
  // {path: 'Dashboard', component: DashboardComponent},
  {path: 'CreateCustomer', component: CustomerAccountComponent},
  {path: 'ListCustomer', component: CustomerAccountListComponent},
  {path: 'Customerdetail/:customer_id', component: CustomerDetailComponent},
  {path: 'Customerdetail/:customer_id/edit', component: CustomerEditComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
