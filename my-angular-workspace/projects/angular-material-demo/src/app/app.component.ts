import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialFormComponent } from './material-demo/material-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MaterialFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularMaterialDemo';
}
