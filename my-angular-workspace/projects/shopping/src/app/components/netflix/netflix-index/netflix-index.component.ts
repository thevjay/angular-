import { Component } from '@angular/core';
import { NetflixHeaderComponent } from '../netflix-header/netflix-header.component';
import { NetflixMainComponent } from '../netflix-main/netflix-main.component';

@Component({
  selector: 'app-netflix-index',
  standalone: true,
  imports: [NetflixHeaderComponent,NetflixMainComponent],
  templateUrl: './netflix-index.component.html',
  styleUrl: './netflix-index.component.css'
})

export class NetflixIndexComponent {

}
