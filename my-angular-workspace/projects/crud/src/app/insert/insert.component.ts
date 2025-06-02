import { Component } from '@angular/core';
import { Employee } from '../employee.contract';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})
export class InsertComponent {
  public employee:Employee = {
    Eno:0,
    Ename:'',
    Job:'',
    Dname:'',
    Salary:''
  };
  public response:string | null = "";

  constructor(private serv:EmployeeService){}

  InsertEmp(){
    this.serv.InsertEmp(this.employee).subscribe((res)=>{
      this.response = res
    },(error)=>{
      console.log(error)
    })
  }
  
}
