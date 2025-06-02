import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee.contract';
import { EmployeeService } from './employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public employees:Employee[] = [];
  constructor(private serv:EmployeeService){}

  ngOnInit(){
    this.serv.GetAllEmployees().subscribe((emps)=>{
      this.employees = emps;
    },(error)=>{
      console.log(error);
    })
  }
}
