import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  empID:number = 101;
  empName:string = "srikanth";
  empSalary:number = 12345;

  ChangeData(){
    this.empID = 102;
    this.empName = "Raju";
    this.empSalary = 12345;
  }
}
