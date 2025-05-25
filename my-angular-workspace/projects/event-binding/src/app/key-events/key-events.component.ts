import { CommonModule } from '@angular/common';
import { Component, ViewRef } from '@angular/core';

@Component({
  selector: 'app-key-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './key-events.component.html',
  styleUrl: './key-events.component.css'
})
export class KeyEventsComponent {
  public users:any[]=[
    {UserName:'Sri'},
    {UserName:'Srikanth'},
    {UserName:'Sri7989'},
    {UserName:'Sri_NIT'},
    {UserName:'Raju'}
  ]

  public isPwdWarningVisible: boolean = false;

  public UserError:string='';
  public isInvalid:boolean=false;

  VerifyUser(e:any){
    let user = e.target.value;
    for(var u of  this.users){
      if(u == user){
        this.UserError = "Username already taken. try another";
        this.isInvalid = true;
        break;
      }else{
        this.UserError = 'Username available';
        this.isInvalid = false
      }
    }
  }  

  VerifyPassword(e:any){
    if(e.keyCode >= 65 && e.keyCode <= 90){
      this.isPwdWarningVisible = true;
    }else{
      this.isPwdWarningVisible = false;
    }
  }
}
