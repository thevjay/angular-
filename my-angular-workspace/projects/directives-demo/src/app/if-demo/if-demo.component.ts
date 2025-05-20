 import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-demo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './if-demo.component.html',
  styleUrl: './if-demo.component.css'
})
export class IfDemoComponent {
  public product:any = {
    Name: 'Iphone 14',
    Price: 89000,
    Image:'assets/A.jpg'
  }
  public preview:boolean = false;
}
