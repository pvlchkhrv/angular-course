import { Pipe, PipeTransform } from '@angular/core';

export interface ILocation {
  "street": string,
  "city": string,
  "state": string,
  "postcode": number,
  "coordinates": {
    "latitude": string,
    "longitude": string
  },
  "timezone": {
    "offset": string,
    "description": string
  }
}

@Pipe({
  name: 'transformAddress'
})
export class TransformAddressPipe implements PipeTransform {

  transform(address: ILocation): string {
    return `${address.postcode}, ${address.city}`
  }

}
