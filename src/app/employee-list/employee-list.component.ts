import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees = []
  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service
    .getEmployees()
    .subscribe((response:any) =>{
      this.employees = response
      //console.log(response);
    })
  }

}
