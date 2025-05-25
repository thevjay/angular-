import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitlePipe } from './nametitle.pipe';

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  imports: [CommonModule,TitlePipe],
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.css'
})
export class CustomPipeComponent {
  public emps: any[] = [
  { empId: 101, empName: "Srikanth", gender: "male" },
  { empId: 102, empName: "Anjali", gender: "female" },
  { empId: 103, empName: "Rahul", gender: "male" },
  { empId: 104, empName: "Priya", gender: "female" },
  { empId: 105, empName: "Arjun", gender: "male" },
  { empId: 106, empName: "Meera", gender: "female" },
  { empId: 107, empName: "David", gender: "male" },
  { empId: 108, empName: "Sneha", gender: "female" },
  { empId: 109, empName: "Kiran", gender: "male" },
  { empId: 110, empName: "Pooja", gender: "female" }
  ];

}
