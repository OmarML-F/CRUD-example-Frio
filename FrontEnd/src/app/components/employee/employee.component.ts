import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employeeModel';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit { 

  constructor(public employeeService:EmployeeService)  { }

  hc:HeaderComponent

  ngOnInit(): void {
    this.getEmployees();
  }

  limpiarFormulario(form: NgForm){
    form.reset();
  }

  getEmployees(){ 
    this.employeeService.getEmployees().subscribe(
      (res)=> { this.employeeService.employees = res
      },
      (err) => console.log(err)
    );
  }

  addEmployee(form:NgForm){
   if(form.value.id){
     this.employeeService.editEmployee(form.value).subscribe(
       (res) =>{
         this.getEmployees();
         form.reset();
         console.log('Usuario actualizado');
       },
       (err) => console.error(err)
     );
   }else{
    this.employeeService.createEmployee(form.value).subscribe(
      res => {
        this.getEmployees();
        form.reset();
        console.log("usuario creado");
    },
      err => console.log(err)
    )
   }
  }

  employeeDelete(id: string){
  if(confirm('Are you sure you want to delete it?')){
    this.employeeService.deleteEmployee(id).subscribe(
      res => {
        this.getEmployees();
      },
      (err) => console.error(err)
    );
   }
  }

  
  employeeUpdate(employee:Employee){
    this.employeeService.selectedEmployee = employee;
  }

}

