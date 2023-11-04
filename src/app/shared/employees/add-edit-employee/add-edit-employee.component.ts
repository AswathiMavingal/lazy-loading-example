import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css'],
})
export class AddEditEmployeeComponent {
  @ViewChild('employeeModal') modal: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  openModal() {
    this.modal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.modal.nativeElement.style.display = 'none';
  }
}
