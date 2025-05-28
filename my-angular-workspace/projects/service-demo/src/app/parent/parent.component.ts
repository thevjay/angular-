import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  public msg:string = '';

  public students:any[]=[
    {stdId:101,stdName:"Srikanth"},
    {stdId:102,stdName:"RaJu"},
    {stdId:103,stdName:"Ramesh"},
    {stdId:104,stdName:"Rajesh"},
    {stdId:105,stdName:"RaJURE"},
    {stdId:106,stdName:"Klasen"},
  ]
  public SendClick(){
    this.msg = 'Hello from Parent'
  }

  public msgFromChild:string='';

  public GetMessageFromChild(e:any){
    this.msgFromChild=e;
  }
}
