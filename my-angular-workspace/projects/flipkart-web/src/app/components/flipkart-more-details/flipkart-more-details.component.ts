import { Component } from '@angular/core';
import { FakeProductContract } from '../../contracts/fakeproduct.contract';
import { ActivatedRoute } from '@angular/router';
import { FlipkartService } from '../../services/flipkart.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flipkart-more-details',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './flipkart-more-details.component.html',
  styleUrl: './flipkart-more-details.component.css'
})
export class FlipkartMoreDetailsComponent {
    public product:FakeProductContract = {
      id:0,
      category:'',
      description:'',
      image:'',
      price:0,
      title:'',
      rating:{
        count:0,
        rate:0
      }
    }

    public id:any = '';
    constructor(private route:ActivatedRoute,private data:FlipkartService){}

    ngOnInit():void{
      this.id = this.route.snapshot.paramMap.get('id');

      this.data.GetProductById(this.id).subscribe((data)=>{
        this.product = data
      })
    }
}
