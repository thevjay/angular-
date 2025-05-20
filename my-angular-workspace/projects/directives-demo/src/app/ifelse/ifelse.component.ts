import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
  //flag:boolean = true;
  public product:any = {
    Name:"Iphone 14",
    Price:3849,
    Image:'assets/A.jpg',
    Desc:"Ikbmbfgbgg dfhwb jbhj jvjh hjbj"
  }

  btnText = 'Desc';
  toggle:boolean = true;

  ToggleButton() {
    this.toggle = (this.toggle == true) ? false : true;
    this.btnText = (this.btnText == 'Desc') ? 'Preview' : 'Desc'
  }
}
