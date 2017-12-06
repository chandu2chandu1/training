import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'trim'
})

export class TrimmerPipe implements PipeTransform{
    transform(value: string, limit:number) {
        if (value.length > limit) {
            let trimmedString = value.substring(0, limit);
            return value.substring(0, value.substring(0, limit).lastIndexOf(" ")) + "...";    
        }
        return value;
    }
}