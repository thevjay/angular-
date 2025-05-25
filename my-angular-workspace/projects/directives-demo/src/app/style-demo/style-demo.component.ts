import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-style-demo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './style-demo.component.html',
  styleUrl: './style-demo.component.css'
})
export class StyleDemoComponent {
  public bgStyle:string = 'red';
  public textStyle:string = 'white';
  public padding:string = '0';
  public fontSize:string = '0';
  
  public styleObj:{
    'background-color':string,
    'color':string,
    'padding':string,
    'font-size':string
  }={
    "background-color":"red",
    "color":"white",
    "padding":this.padding+"px",
    "font-size":this.fontSize+"px"
  }

  ApplyStyles(){
    this.styleObj={
      "background-color":this.bgStyle,
      "color":this.textStyle,
      "font-size":this.fontSize+"px",
      "padding":this.padding+"px"
    }
  }

  FontChange(){
    this.styleObj={
      "background-color":this.bgStyle,
      "color":this.textStyle,
      "font-size":this.fontSize+"px",
      "padding":this.padding+"px"
    }
  }

  SubmitClick(e:any){
    document.write(`
      Button ID: ${e.target.id},
      Button Name: ${e.target.name},
      Button Class: ${e.target.className},
      X-Position:${e.clientX},
      ctrl Key: ${e.clrKey}  
    `);
  }


  Delete(e:any){
    if(e.target.id == 'x'){

    } else if(e.target.id == 'y'){

    } else if(e.target.id == 'z'){
       
    }
  }
}
