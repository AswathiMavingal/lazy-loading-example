import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { AddEditEmployeeComponent } from './employees/add-edit-employee/add-edit-employee.component';
// import { EmployeesComponent } from './employees/employees.component';
// import { AddEditEmployeeComponent } from './employees/add-edit-employee/add-edit-employee.component';

@NgModule({
  declarations: [EmployeesComponent, AddEditEmployeeComponent],
  imports: [CommonModule],
  exports: [EmployeesComponent, AddEditEmployeeComponent],
})
export class SharedModule {}
