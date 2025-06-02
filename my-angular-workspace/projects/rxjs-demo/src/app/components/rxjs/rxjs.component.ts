import { Component } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent {
  agents!:Observable<string>;
  studentName:string[]=[];

  studentsList = ["Srikanth","Bhanu","Abhi","Krish"];
  students:Observable<string[]> = of(this.studentsList);

  marks:Observable<number> = of(1234);

  x:number=0;

  orderList:string[] = ["Jeans","Woodland","Tommy"]
  orders:Observable<string> = from(this.orderList)


  orderName:string=''

  ngOnInit():void{

    this.orders.subscribe((data)=>{
      const nums = interval(500);
      nums.subscribe((nums)=>{
        if(nums<5){
          console.log(data+nums);
        }
      })
    })

     /* this.orders.subscribe((data)=>{
        setInterval(()=>{
          this.orderName = data;
        },3000)
        // console.log(data);
      })*/    

    /*this.students.subscribe((data)=>{
      this.studentName = data;
    })

    this.marks.subscribe((data)=>{
      this.x = data
    })/*

    /*this.agents = new Observable(
      function(observer){
        try{
          observer.next("Javascript");
          setInterval(()=>{

          },1000)
          setInterval(()=>{
            observer.next("React");
          },1000)
          observer.next("Angular");
        }
        catch(e){
          observer.error(e);
        }
      }
    );

    this.agents.subscribe((data)=>{
      // console.log(data);
      this.agentName = data;
    })*/


  }
}
