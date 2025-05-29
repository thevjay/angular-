import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FakeProductContract } from '../../contracts/fakeproduct.contract';
import { FlipkartService } from '../../services/flipkart.service';

@Component({
  selector: 'app-flipkart-mens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flipkart-mens.component.html',
  styleUrl: './flipkart-mens.component.css'
})
export class FlipkartMensComponent {
     public products:FakeProductContract[] = []
    
      constructor(private serv:FlipkartService){}
    
      ngOnInit(){
        this.serv.GetProductByCategory("men's clothing").subscribe((data)=>{
          this.products = data
        })
      }
}
