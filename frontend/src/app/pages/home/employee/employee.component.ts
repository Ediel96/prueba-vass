import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../core/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeSev : EmployeeService) { }

  ngOnInit(): void {
    this.employeeSev.getAllEmployeee().subscribe(
      res => console.log(res)
    )
  }

}
