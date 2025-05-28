import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInfo } from './ProductInfo';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {

  constructor(private http:HttpClient) {

   }

   public GetProducts():Observable<ProductInfo[]>{
    return this.http.get<ProductInfo[]>('https://fakestoreapi.com/products');
   }

   public GetCategories():Observable<string[]>{
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories')
   }

   public GetJeweleryInfo():Observable<any[]>{
    return this.http.get<any[]>('https://fakestoreapi.com/products/category/jewelery');
   }
}
