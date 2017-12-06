import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'filterData'
})

export class FilterPipe implements PipeTransform{

    transform(filterProperty:string, data:string[]) {
        return data;
    }
}