import { Component } from '@angular/core';
import { NetflixRegisterComponent } from "../netflix-register/netflix-register.component";

@Component({
  selector: 'app-netflix-main',
  standalone: true,
  imports: [NetflixRegisterComponent],
  templateUrl: './netflix-main.component.html',
  styleUrl: './netflix-main.component.css'
})
export class NetflixMainComponent {

}
