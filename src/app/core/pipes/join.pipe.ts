import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
  pure: false
})
export class JoinPipe implements PipeTransform {

  transform(array: any, start?: number, end?: number): string {
    let result = array;
    if (start && end) {
      result = array.slice(start, end);
    }
    if (start && !end) {
      result = array.slice(start, result.length);
    }
    return result.join(", ")
  }
}
