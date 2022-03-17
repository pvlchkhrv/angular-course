import { Pipe, PipeTransform } from '@angular/core';

interface IName {
  "title": string;
  "first": string;
  "last": string;
}

@Pipe({
  name: 'transformFullName'
})
export class TransformFullNamePipe implements PipeTransform {

  transform(name: IName): string {
    return `${name.first}, ${name.last}`
  }
}
