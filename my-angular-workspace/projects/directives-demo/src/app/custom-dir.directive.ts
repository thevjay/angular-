import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDir]',
  standalone: true
})
export class CustomDirDirective {

  constructor(el:ElementRef) {
     el.nativeElement.style.border="2px solid red";
     el.nativeElement.style.color="yellow";
   }

}
