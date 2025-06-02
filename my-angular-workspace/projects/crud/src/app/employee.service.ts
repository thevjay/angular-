import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "./employee.contract";

@Injectable({
    providedIn:'root'
})

export class EmployeeService{
    // Dependency Injection
    constructor(private http:HttpClient){}
    header = new HttpHeaders()
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin','*')


    public baseUrl:string = "http://localhost:50067/api/Emp";

    // GET ALL RECORDS
    public GetAllEmployees():Observable<Employee[]>{
        return this.http.get<Employee[]>(this.baseUrl,{headers:this.header})   
    }

    // GET SINGLE RECORD
    public GetEmployeeById(id:any):Observable<Employee>{
        return this.http.get<Employee>(this.baseUrl+"/"+id,{headers:this.header})
    }   

    // INSERT THE RECORD
    public InsertEmp(emp:Employee):Observable<string>{
        return this.http.post<string>(this.baseUrl,emp,{headers:this.header})
    }

    // UPDATE THE RECORD
    public UpdateEmp(emp:Employee):Observable<string>{
        return this.http.put<string>(this.baseUrl,emp,{headers:this.header})
    }
    
    // DELETE THE RECORD
    public DeleteEmp(id:any):Observable<string>{
        return this.http.delete<string>(this.baseUrl+"/"+id,{headers:this.header})
    } 
}

