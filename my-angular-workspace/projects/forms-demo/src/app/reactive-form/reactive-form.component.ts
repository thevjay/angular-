import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  public registrationForm = new FormGroup({
    Username: new FormGroup("Srikanth"),
    Age: new FormGroup(0),
    Mobile:new FormGroup('')
  })

  Register(data:any){
    console.log(JSON.stringify(data))
  }
}
