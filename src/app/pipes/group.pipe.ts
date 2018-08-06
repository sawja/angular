import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student';

@Pipe({
  name: 'group'
})
export class GroupPipe implements PipeTransform {
  transform(value: any) {
    let copy = JSON.parse(JSON.stringify(value))
    
    if (value) {
      for (let x of copy) {
        let flag = [0,0,0]
        if (x.groupNumber % 2 === 0) {
          //x.groupNumber = x.groupNumber + ' (div 2)'
          flag[0] = 1
        } 
        if (x.groupNumber % 3 === 0) {
          //x.groupNumber = x.groupNumber + ' (div 3)'
          flag[1] = 1
        } 
        if (x.groupNumber % 5 === 0) {
          //x.groupNumber = x.groupNumber + ' (div 5)'
          flag[2] = 1
        }
        if (flag[0] === 1) x.groupNumber = x.groupNumber + ' (div 2)' 
        if (flag[1] === 1) x.groupNumber = x.groupNumber + ' (div 3)'
        if (flag[2] === 1) x.groupNumber = x.groupNumber + ' (div 5)'
        if (flag[0] === 0 && flag[1] === 0 && flag[2] === 0) x.groupNumber = x.groupNumber + ' '

      }
      return copy
    }
    return value
  }
}
