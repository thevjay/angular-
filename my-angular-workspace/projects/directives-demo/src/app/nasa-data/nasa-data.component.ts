import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nasa-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nasa-data.component.html',
  styleUrl: './nasa-data.component.css'
})
export class NasaDataComponent {
  marsObject:any =[];
  GetMarsPhotos(){
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
    .then((res)=>res.json())
    .then((data)=>{
      this.marsObject = data;
    })
  }
}
