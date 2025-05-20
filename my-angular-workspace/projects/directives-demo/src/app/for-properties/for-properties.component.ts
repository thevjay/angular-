import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Products{
  id:number;
  title:string;
  price:number;
  description:string;
  category:string;
  image:string;
  rating:Rating;
}

export interface Rating{
  rate:number;
  count:number
}

@Component({
  selector: 'app-for-properties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for-properties.component.html',
  styleUrl: './for-properties.component.css'
})

export class ForPropertiesComponent {
  public products:Products[] = [];
  constructor() {}
  // It will execute when the component is called  (Life Cycle Hook)
  ngOnInit(){
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((res)=>{this.products = res})
  }
}

