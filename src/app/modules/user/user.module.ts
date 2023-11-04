import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GoodiesComponent } from './components/goodies/goodies.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AddEditGoodiesComponent } from './components/goodies/add-edit-goodies/add-edit-goodies.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { SharedModule } from 'src/app/shared/shared.module';
// import { EmployeesComponent } from '../../shared/employees/employees.component';
// import { AddEditEmployeeComponent } from '../../shared/employees/add-edit-employee/add-edit-employee.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GoodiesComponent,
    UserDashboardComponent,
    AddEditGoodiesComponent,
    // EmployeesComponent,
    // AddEditEmployeeComponent,
  ],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
