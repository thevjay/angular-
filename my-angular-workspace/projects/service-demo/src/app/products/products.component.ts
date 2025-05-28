import { Component } from '@angular/core';
import { FakeStoreService } from '../fake-store.service';
import { ProductInfo } from '../ProductInfo';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  

  public products:ProductInfo[] = [];
  public categories:string[] = [];
  public jeweleryProducts:any[] = [];

  constructor(private serv:FakeStoreService){}


  GetProductData(){
    this.serv.GetProducts().subscribe((res)=>{
      this.products = res
    },(error)=>{
      console.log("Error occur while making an api call",error)
    })
  }

  GetCategoryData(){
    this.serv.GetCategories().subscribe((res)=>{
      this.categories = res;
    })
  }

  GetJeweleryData(){
    this.serv.GetJeweleryInfo().subscribe((res)=>{
      this.jeweleryProducts = res;
    })
  }
  // ngOnInit(){

  //   this.serv.GetProducts().subscribe(res=>{
  //     this.products = res
  //   })

  //   console.log(this.products)
  // }

}
