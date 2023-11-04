import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
// import { EmployeesComponent } from '../../shared/employees/employees.component';
// import { AddEditEmployeeComponent } from '../../shared/employees/add-edit-employee/add-edit-employee.component';
import { AdminEmployeesComponent } from './components/admin-employees/admin-employees.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    // AddEditEmployeeComponent,
    // EmployeesComponent,
    AdminEmployeesComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
