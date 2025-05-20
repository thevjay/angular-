import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  //Model
  public product = {
    productId:10,
    productName:"Netflix",
    isAvailabe:true,
    imageUrl: "assets/netflix.jpg"
  }
}
