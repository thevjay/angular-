import { Component } from '@angular/core';
import { Employee } from '../employee.contract';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  public employee:Employee = {
    Eno:0,
    Ename:'',
    Job:'',
    Dname:'',
    Salary:''
  };

  public response:string | null = null;
  public empId:any = null;
  
  constructor(private route:ActivatedRoute,private serv:EmployeeService){}

  ngOnInit(){
    this.empId = this.route.snapshot.paramMap.get('id');
    this.serv.GetEmployeeById(this.empId).subscribe((res)=>{
      this.employee = res
    })
  }

  UpdateEmp(emp:Employee){
    this.serv.UpdateEmp(emp).subscribe((res)=>{
      this.response = res;
    })    
  }
}
