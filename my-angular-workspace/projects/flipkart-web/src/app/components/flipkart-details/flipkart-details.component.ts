import { Component } from '@angular/core';
import { FakeProductContract } from '../../contracts/fakeproduct.contract';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FlipkartService } from '../../services/flipkart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flipkart-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './flipkart-details.component.html',
  styleUrl: './flipkart-details.component.css'
})
export class FlipkartDetailsComponent {

  constructor(private route:ActivatedRoute,private serv:FlipkartService){}

  public id : any = '';

  public product:FakeProductContract = {
    id:0,
    title:'',
    category:'',
    description:'',
    image:'',
    price:0,
    rating:{
      count:0,
      rate:0
    }
  }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.serv.GetProductById(this.id).subscribe((data)=>{
      this.product = data
    })
  }
}
