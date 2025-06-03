import { Component } from '@angular/core';
import { ParentComponent } from "../../../../../service-demo/src/app/parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent {

}
