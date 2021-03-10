import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {EmployeeComponent} from '../employee/employee.component';
import {EmployeeService} from '../../services/employee.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  employeeComponent: EmployeeComponent[];
  employeeService: EmployeeService[];
  items: MenuItem[];

    ngOnInit() {
       this.labelMenu();
}

URL_API = "http://localhost:4600/api/empleados";

labelMenu(){
  this.items = [
    {
        label: 'JSON members', url: this.URL_API
    }
   ];
  }
}
 

