import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Input,
  OnDestroy,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css'],
})
export class AddEditEmployeeComponent implements OnDestroy {
  employee: Employee;
  @Input() param: number | undefined;
  @ViewChild('employeeModal') modal: ElementRef;
  skillList: string[] = ['Angular', 'Javascript', 'React'];
  emplyeeForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    empId: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    emailOffice: new FormControl('', [Validators.required, Validators.email]),
    emailPersonal: new FormControl('', [Validators.required, Validators.email]),
    mobileNum: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    skills: new FormControl('', [Validators.required]),
  });
  constructor(private _employee: EmployeeService) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {
    debugger;
  }

  openModal(id?: number | null) {
    this.modal.nativeElement.style.display = 'block';
    id ? this.setInputData(id) : this.emplyeeForm.reset();
  }

  closeModal() {
    this.modal.nativeElement.style.display = 'none';
  }

  // clearInput() {
  //   let empData = {};
  //   this.emplyeeForm.patchValue(empData);
  // }
  onSubmit() {
    // if (this.emplyeeForm.valid) {
    //   // const employee: Employee = { ...this.emplyeeForm.value };
    //   this.employee = { ...this.employee, ...this.emplyeeForm.value }; //Object.assign(this.employee, this.emplyeeForm.value);
    //   this._employee.addEmployee(this.employee).subscribe((data) => {
    //     console.log(data);
    //   });
    // }

    if (this.emplyeeForm.valid) {
      // const employee: Employee = { ...this.emplyeeForm.value };
      this.employee = { ...this.employee, ...this.emplyeeForm.value }; //Object.assign(this.employee, this.emplyeeForm.value);
      this._employee.addEmployee(this.employee).subscribe({
        next: (data) => {
          console.log('Employee added successfully');
          this.modal.nativeElement.style.display = 'none';
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }

  setEmployeeData(emp: Employee | null) {
    let empData = {};
    empData = { ...empData, ...emp };
    this.emplyeeForm.patchValue(empData);
  }

  setInputData(prm?: number | null) {
    this.param = prm || undefined;
    if (this.param) {
      this._employee.getEmployee(this.param).subscribe({
        next: (data) => {
          this.setEmployeeData(data);
        },
        error: console.log,
      });
    } else {
      this.setEmployeeData(null);
    }
  }
}
