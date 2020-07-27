import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './/customer-routing.module';
import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../auth/role.enum';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { MaterialModule } from '../material.module';


const customerRoutes: Routes = [
  {
  path: '',
  children: [
    {
      path: '',
      component: CustomerListComponent
    }
  ],
  canActivate : [AuthGuard],
  data: {   expectedRole: Role.Admin }
}
];
@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [CustomerListComponent, NewCustomerComponent, EditCustomerComponent, DetailCustomerComponent],
  entryComponents: [NewCustomerComponent, EditCustomerComponent, DetailCustomerComponent]
})


export class CustomerModule { }
