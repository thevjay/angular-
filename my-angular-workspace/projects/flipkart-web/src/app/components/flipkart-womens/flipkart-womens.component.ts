import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FakeProductContract } from '../../contracts/fakeproduct.contract';
import { FlipkartService } from '../../services/flipkart.service';

@Component({
  selector: 'app-flipkart-womens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flipkart-womens.component.html',
  styleUrl: './flipkart-womens.component.css'
})
export class FlipkartWomensComponent {
    public products:FakeProductContract[] = []
        
          constructor(private serv:FlipkartService){}
        
          ngOnInit(){
            this.serv.GetProductByCategory("women's clothing").subscribe((data)=>{
              this.products = data
            })
          }
}
