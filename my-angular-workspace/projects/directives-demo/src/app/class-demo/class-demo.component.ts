import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-class-demo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './class-demo.component.html',
  styleUrl: './class-demo.component.css'
})
export class ClassDemoComponent {
  
}
