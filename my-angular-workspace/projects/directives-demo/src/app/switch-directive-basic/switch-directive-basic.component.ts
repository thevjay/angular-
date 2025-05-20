import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-directive-basic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch-directive-basic.component.html',
  styleUrl: './switch-directive-basic.component.css'
})
export class SwitchDirectiveBasicComponent {
   public str:string = "case3";
}
