import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../shared/models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}
  addEmployee(data: Employee): Observable<Employee> {
    return this._http.post<Employee>('http://localhost:3000/employees', data);
  }

  getEmployees(): Observable<any> {
    return this._http.get('http://localhost:3000/employees');
  }
  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/employees/${id}`);
  }

  getEmployee(id: number): Observable<any> {
    return this._http.get(`http://localhost:3000/employees/${id}`);
  }
}
