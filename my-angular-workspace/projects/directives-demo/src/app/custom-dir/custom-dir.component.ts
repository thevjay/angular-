import { Component } from '@angular/core';
import { CustomDirDirective } from '../custom-dir.directive';

@Component({
  selector: 'app-custom-dir',
  standalone: true,
  imports: [CustomDirDirective],
  templateUrl: './custom-dir.component.html',
  styleUrl: './custom-dir.component.css'
})



export class CustomDirComponent {

}
