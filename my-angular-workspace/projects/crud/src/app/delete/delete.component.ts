import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.contract';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
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
  
    DeleteEmp(emp:Employee){
      this.serv.DeleteEmp(emp).subscribe((res)=>{
        this.response = res;
      })    
    }
}
