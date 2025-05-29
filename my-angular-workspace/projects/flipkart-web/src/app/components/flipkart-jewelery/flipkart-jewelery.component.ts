import { Component } from '@angular/core';
import { FakeProductContract } from '../../contracts/fakeproduct.contract';
import { FlipkartService } from '../../services/flipkart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flipkart-jewelery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flipkart-jewelery.component.html',
  styleUrl: './flipkart-jewelery.component.css'
})
export class FlipkartJeweleryComponent {
  public products:FakeProductContract[] = []

  constructor(private serv:FlipkartService){}

  ngOnInit(){
    this.serv.GetProductByCategory("jewelery").subscribe((data)=>{
      this.products = data
    })
  }
}
