import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, input: string) {
    if (input) {
        input = input.toLowerCase();
        return value.filter(function (el: any) {
            return el.lastName.toLowerCase().includes(input) || el.firstName.toLowerCase().includes(input) 
        })
    }
    return value;
  }
}
