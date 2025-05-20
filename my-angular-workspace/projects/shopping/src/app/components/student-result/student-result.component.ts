import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-result',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-result.component.html',
  styleUrl: './student-result.component.css'
})
export class StudentResultComponent {


  public stdId:number = 101;
  public stdName:string = "strk,";
  public sub1:number = 67;
  public sub2:number = 78;
  public sub3:number = 89;
  public marks:number = 0;
  public avg:number = 0;
  public result:string = "";

  Calculation() {
    this.marks = Number(this.sub1)+Number(this.sub2)+Number(this.sub3);
    this.avg = this.marks/3;
    this.result = this.calResult(this.avg)
  }

  public calResult(avg:number):string{
    if(avg>45){
      return "passw";
    }else{
      return "fail"
    }
}}
