import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  template: `
    <h2>Empplyee List</h2>
    <h3>{{errorMSg}}</h3>
    <ul *ngFor="let employee  of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styles:[] 
})
export class EmployeeListComponent implements OnInit {

  public employees=[];
  public errorMSg;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    // this.employees=this._employeeService.getEmployees();
    this._employeeService.getEmployees().subscribe(data => this.employees=data,error=>this.errorMSg=error);
  }

}
