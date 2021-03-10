import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from '../models/employeeModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  URL_API = "http://localhost:4600/api/empleados";

  selectedEmployee: Employee = {
    name: '',
    email: '',
    phone: ''
  }

  employees: Employee[];

  constructor(public http:HttpClient) { }
  

  getEmployees(){
    return this.http.get<Employee[]>(this.URL_API);
  }

  createEmployee(employee:Employee){
    return this.http.post(this.URL_API, employee);
  }


  editEmployee(employee:Employee){
    return this.http.put(`${this.URL_API}/${employee.id}`, employee)
  }

  deleteEmployee(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

} 
