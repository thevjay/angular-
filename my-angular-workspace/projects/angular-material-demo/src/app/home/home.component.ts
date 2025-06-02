import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public Title():string{
    return 'Amazon Cart'
  }

  public Total(qty:number,price:number):number{
    return qty*price;
  }
}
