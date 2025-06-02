import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialFormComponent } from './material-demo/material-demo.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MaterialFormComponent,ScrollingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularMaterialDemo';
}
