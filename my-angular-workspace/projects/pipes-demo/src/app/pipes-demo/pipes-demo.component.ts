import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css'
})
export class PipesDemoComponent {
  public name:string = "Srikanth angular TRAINER";
  public price:number = 34500.98765;
  public mfg:Date = new Date("2023-04-28")
  public product:{
    name:string,
    price:number
  }={
    name:"ONeplus",
    price:23904
  }
  public msg:string = "Welcome to NareshIT";

  public courses:string[] = ["c#.Net","VB.Net","Java","C+++"]

  public products:{name:string,shippedTo:string}[]=[
    {name:'Samsung TV',shippedTo:'Delhi'},  
    {name:'Mobile',shippedTo:'Hyd'},
    {name:'Smart Watch',shippedTo:'Goa'},
    {name:'Teashirt',shippedTo:'Mumbai'},
    {name:'Samsung TV',shippedTo:'Delhi'},
  ]

  public status:any={
    'Delhi':'Delivery in 2 days',
    'Hyd':'Same day delivery',
    'Mumbai':'one day delivery',
    'other':'Dispached in 3-4 working days'
  }
}
