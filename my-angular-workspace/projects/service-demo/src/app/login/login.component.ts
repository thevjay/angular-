import { Component, OnInit } from '@angular/core';
import { OtpService } from '../otp.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  
  public otp:string = '';
  //Injection
  constructor(private serv:OtpService){}

  ngOnInit(): void {
    this.otp = this.serv.GenerateOTP()
  }

  public NewOTP(){
    this.otp = this.serv.GenerateOTP();
  }
}
