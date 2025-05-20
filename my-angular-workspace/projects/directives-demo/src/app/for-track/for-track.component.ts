import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-track',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for-track.component.html',
  styleUrl: './for-track.component.css'
})

export class ForTrackComponent {
  public emps:any[] = [
    {empId:101,empName:"seugy",salary:12233},
    {empId:102,empName:"sai",salary:13874},
    {empId:103,empName:"Raju",salary:12018},
  ]

  GetUpdatedData(){
    this.emps = [
    {empId:101,empName:"seugy",salary:12233},
    {empId:102,empName:"sai",salary:13874},
    {empId:103,empName:"Raju",salary:12018},
    {empId:104,empName:"seugy",salary:12233},
    {empId:105,empName:"sai",salary:13874},
    {empId:106,empName:"Raju",salary:12018},
    ]
  }

  TrackChanges(index:number){
    return index
  }
}
