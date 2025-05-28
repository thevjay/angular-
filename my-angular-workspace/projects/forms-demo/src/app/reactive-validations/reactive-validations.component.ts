import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-validations',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './reactive-validations.component.html',
  styleUrl: './reactive-validations.component.css'
})
export class ReactiveValidationsComponent {
  constructor(private fb:FormBuilder){}

  public frmRegister = this.fb.group({
    Name:this.fb.control('',[Validators.required,Validators.minLength(4)]),
    Email:this.fb.control('',[Validators.email]),
    Mobile:this.fb.control('',[Validators.required,Validators.pattern("\+91\d{10}")])
  })

  get Name():FormControl{
    return this.frmRegister.get("Name") as FormControl;
  }

  get Email():FormControl{
    return this.frmRegister.get("Email") as FormControl;
  }

  get Mobile():FormControl{
    return this.frmRegister.get("Mobile") as FormControl;
  }

  Register(data:any){
    alert(data)
  }
}
