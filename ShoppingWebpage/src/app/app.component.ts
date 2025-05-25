import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface ProductInfo{
  id:number;
  title:string;
  price:number;
  description:string;
  category:string;
  image:string;
  rating:{
    rate:number;
    count:number;
  }
}



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public cartItemsCount:number = 0;
  public categories:string[] = [];
  public products:ProductInfo[]=[];
  public cartItems:ProductInfo[]=[];
  public isCartItemsVisible:boolean=false;


  public LoadCategories():void{
    fetch('https://fakestoreapi.com/products/categories')
    .then((res)=>res.json())
    .then((data)=>{
      data.unshift('all');
      this.categories=data;
    })
  }

  public LoadProducts(url:string):void{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
      this.products = data;
    })
  }

  public GetCartItemsCount():void{
    this.cartItemsCount = this.cartItems.length;
  }

  ngOnInit():void{
    this.LoadCategories();
    this.LoadProducts('https://fakestoreapi.com/products')
    this.GetCartItemsCount();
  }

  public CategoryChanged(categoryName:string){
    if(categoryName == 'all'){
      this.LoadProducts('https://fakestoreapi.com/products');
    }else{
      this.LoadProducts(`https://fakestoreapi.com/products/category/${categoryName}`)
    }
  }

  public ToggleCart() {
    this.isCartItemsVisible = (this.isCartItemsVisible == false) ? true : false ;
  }

  public RemoveItem(id:number){
    var confirmation = confirm("Are you sure to delete?")
    if(confirmation == true){
      this.cartItems.splice(id,1);
      this.GetCartItemsCount()
    } 
  }

  public AddToCart(id:number){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
      this.cartItems.push(data);
      this.GetCartItemsCount();
    })
  }
}
