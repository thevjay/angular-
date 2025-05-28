import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css'
})
export class FormBuilderComponent {

    constructor(private fb:FormBuilder){}

    public frmRegister = this.fb.group({
      Name:this.fb.control(''),
      Price:this.fb.control(0),
      frmVendor:this.fb.group({
        VendorName:this.fb.control(''),
        VendorRating:this.fb.control(0)
      })
    })

    Register(data:any){
      alert(JSON.stringify(data))
    }

    UpdateClick(){
      this.frmRegister.patchValue({
        Price:88999,
        frmVendor:{
          VendorName:"XYLL"
        }
      })
    }
}
