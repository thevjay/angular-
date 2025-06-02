import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerToggleIcon } from '@angular/material/datepicker';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FakeProductContract } from '../../../../flipkart-web/src/app/contracts/fakeproduct.contract';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-material-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    ScrollingModule,
    CommonModule
  ],
  templateUrl: './material-demo.component.html',
  styleUrls: ['./material-demo.component.css']
})
export class MaterialFormComponent {
  public products:FakeProductContract[] = [];
  ngOnInit(){
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>{
      this.products = data;
    })
  }
}
