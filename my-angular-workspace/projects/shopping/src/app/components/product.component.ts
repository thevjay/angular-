// Import  => Decorator  => Export class

import { Component } from "@angular/core";

@Component({
    selector:'app-product',
    template:`
        <h1>This is a Product Component</h1>
        <br>
        <div>
            Product ID: {{productId}} <br/>
            Product Name: {{productName}} <br>
            Product Price: {{productPrice}} <br>
            Product Quantity: {{productQty}} <br> 
        </div>
    `,
    styles:["h1{color:green;text-align:center;}"]
})

export class ProductComponent{
    productId:number = 10;
    productName:string = 'Oneplus Mobile';
    productPrice: number = 4300;
    productQty :number = 4;
}