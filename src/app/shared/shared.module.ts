import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { AddEditEmployeeComponent } from './employees/add-edit-employee/add-edit-employee.component';
// import { EmployeesComponent } from './employees/employees.component';
// import { AddEditEmployeeComponent } from './employees/add-edit-employee/add-edit-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeesComponent, AddEditEmployeeComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [EmployeesComponent, AddEditEmployeeComponent],
})
export class SharedModule {}
