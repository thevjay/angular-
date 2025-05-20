import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-for-ex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-for-ex.component.html',
  styleUrl: './simple-for-ex.component.css'
})
export class SimpleForExComponent {
  public courses = ["c.Net","ASP.Net","Angular","ReactJS"];
  public productsList = [
    {category:"Electronics",products:["Tv","Mobile","Laptop"]},
    {category:"MensFashion",products:["Teashirts","Shirts","Joggers"]},
    {category:"Footware",products:["Nike","Adidas","Woodland"]},
  ];
  public employees = [
    {"empId":101,"empName":"surb","empSalary":1233},
    {"empId":102,"empName":"dddgsdgb","empSalary":1234},
    {"empId":103,"empName":"qusdg","empSalary":1453},
    {"empId":104,"empName":"ahfgsg","empSalary":12433},
  ]
}
