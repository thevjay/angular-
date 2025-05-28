import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() public msgFromParent:string = '';
  @Input() public studentObj:any[]=[];


  @Output() public ChildClick:EventEmitter<string> = new EventEmitter<string>();

  public ChildButtonClick(){
    this.ChildClick.emit('Hello ! from Child');
    
  }

}
