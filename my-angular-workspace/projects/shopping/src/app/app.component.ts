import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NetflixIndexComponent } from './components/netflix/netflix-index/netflix-index.component';
import { NetflixHeaderComponent } from './components/netflix/netflix-header/netflix-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NetflixIndexComponent,NetflixHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Shopping';
}
