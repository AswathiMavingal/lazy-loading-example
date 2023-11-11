import { Component, ViewChild, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../models/employee';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  @ViewChild('addeditemployee')
  modal: AddEditEmployeeComponent;
  employees: Employee[];
  constructor(private _emplyee: EmployeeService) {}

  ngOnInit() {
    this._emplyee.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  openModal() {
    this.modal.openModal();
  }

  deleteEmployee(id: number) {
    this._emplyee.deleteEmployee(id + 1).subscribe({
      next: () => {
        alert('Deleted Employee');
      },
      error: console.log,
    });
  }

  editEmployee(id: number) {
    this.modal.openModal();
    this.modal.setInputData(id + 1);
  }
}
