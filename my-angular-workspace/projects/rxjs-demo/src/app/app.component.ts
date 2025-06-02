import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  obs = new Observable((nums)=>{
    nums.next(100);
    nums.next("Rxjs");
    nums.next("Srikanth");
    // nums.error("Error occured")
    nums.complete();
    nums.next("Hyderabad")
  });

  constructor(){}

  ngOnInit():void{
    this.obs.subscribe((data)=>
      console.log(data),
    err=>console.log(err),
    ()=>{console.log("data retrving completed")}
    )
  }
}
