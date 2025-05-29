import { Component } from '@angular/core';
import { FlipkartService } from '../../services/flipkart.service';
import { FakeProductContract } from '../../contracts/fakeproduct.contract';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-flipkart-home',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './flipkart-home.component.html',
  styleUrl: './flipkart-home.component.css'
})
export class FlipkartHomeComponent {
  constructor(private serv:FlipkartService){}

  public products:FakeProductContract[] = [];

  ngOnInit() {
    this.serv.GetProducts().subscribe((data)=>{
      this.products = data
    })
  }
}
