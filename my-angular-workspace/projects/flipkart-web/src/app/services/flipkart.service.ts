import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FakeProductContract } from "../contracts/fakeproduct.contract";

@Injectable({providedIn:'root'})


export class FlipkartService {
    constructor(private http:HttpClient) {}

    public GetProducts():Observable<FakeProductContract[]>{
        return this.http.get<FakeProductContract[]>('https://fakestoreapi.com/products')
    }

    public GetProductById(id:string):Observable<FakeProductContract>{
        return this.http.get<FakeProductContract>('https://fakestoreapi.com/products/'+id)
    }

    public GetCategories():Observable<string[]>{
        return this.http.get<string[]>('https://fakestoreapi.com/products/categories')
    }

    public GetProductByCategory(categoryName:string):Observable<FakeProductContract[]>{
        return this.http.get<FakeProductContract[]>('https://fakestoreapi.com/products/category/'+categoryName)
    }

    
}