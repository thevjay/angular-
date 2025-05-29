import { Component } from '@angular/core';
import { FakeProductContract } from '../../contracts/fakeproduct.contract';
import { FlipkartService } from '../../services/flipkart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flipkart-electronics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flipkart-electronics.component.html',
  styleUrl: './flipkart-electronics.component.css'
})
export class FlipkartElectronicsComponent {
    public products:FakeProductContract[] = []
        
          constructor(private serv:FlipkartService){}
        
          ngOnInit(){
            this.serv.GetProductByCategory("electronics").subscribe((data)=>{
              this.products = data
            })
          }
}
