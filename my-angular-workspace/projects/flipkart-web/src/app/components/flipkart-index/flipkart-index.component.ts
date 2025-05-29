import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-flipkart-index',
  standalone: true,
  imports: [RouterOutlet,RouterModule,HttpClientModule],
  templateUrl: './flipkart-index.component.html',
  styleUrl: './flipkart-index.component.css'
})
export class FlipkartIndexComponent {

}
