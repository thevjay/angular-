import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'title',
    standalone: true // ✅ important for standalone usage

})

export class TitlePipe implements PipeTransform{
    transform(name:string,gender:string):string {
        if(gender.toLowerCase() == "male"){
            return "Mr." + name;
        } else {
            return "Mrs." + name
        }
    }   
}