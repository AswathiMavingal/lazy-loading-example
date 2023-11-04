import { Component, ViewChild } from '@angular/core';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
  @ViewChild('addeditemployee')
  modal: AddEditEmployeeComponent;

  openModal() {
    this.modal.openModal();
  }
}
