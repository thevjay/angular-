import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse-event',
  standalone: true,
  imports: [],
  templateUrl: './mouse-event.component.html',
  styleUrl: './mouse-event.component.css'
})
export class MouseEventComponent {
  public styleObject:{position:string,left:string,top:string}={
    position:'',
    left:'',
    top:''
  }

  public image:string = 'https://images.unsplash.com/photo-1605896404796-d0a620d6f7b0?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  SetColor(color: string) {
  switch (color) {
    case 'black':
      this.image = 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f';
      break;
    case 'red':
      this.image = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
      break;
    case 'green':
      this.image = 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
      break;
  }
}
  MouseMove(event:any){
    this.styleObject={
      position:'fixed',
      left:event.clientX+"px",
      top:event.clientY+"px"
    }
  }
}
