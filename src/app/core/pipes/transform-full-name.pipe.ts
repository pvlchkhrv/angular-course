import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformFullName'
})
export class TransformFullNamePipe implements PipeTransform {

  transform(value: string): string {
    return value
      .split(' ')
      .reduce((acc, value) => `${acc}, ${value}`)
  }
}
