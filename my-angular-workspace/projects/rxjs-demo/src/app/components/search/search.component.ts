import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchForm!:FormGroup;
  name!:FormGroup;

  constructor(){}
  
  ngOnInit():void{
    this.searchForm = new FormGroup({
      name:new FormControl("Start Search")
    })

    this.searchForm.get("name")?.valueChanges
      .pipe(
        debounceTime(2000)
      )
      .subscribe((data)=>{
        console.log(data)
      })
  }
  readValue(){

  }
}
