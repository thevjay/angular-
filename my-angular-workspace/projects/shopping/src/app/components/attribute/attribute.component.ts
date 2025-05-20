import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css'
})
export class AttributeComponent {
  product1:any = {
    product1Id:101,
    product1Name:"Mobile",
    stock:true,
    price:120000
  };
  tableHeight:number = 100;
  tableWidth:number = 500;
  tableBorder:number=2;
}
