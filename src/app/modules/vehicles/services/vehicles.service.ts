import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IVehicle} from '../models/vehicle.model';
import {ICard} from '../../shared/models/card.model';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {

  constructor() {
  }

  public vehicles: IVehicle[] = [
    {
      name: 'VW',
      color: 'grey',
      releaseYear: 2012,
      number: '0938-12'
    },
    {
      name: 'BMW',
      color: 'black',
      releaseYear: 2021,
      number: '0938-222'
    },
    {
      name: 'Audi',
      color: 'white',
      releaseYear: 2012,
      number: '1111-12'
    }
  ]

  public getVehicles(): IVehicle []{
    return this.vehicles;
  }

  public getVehiclesMappedToCards(): ICard[]{
    return this.vehicles.map(v => {
      return {
        title: v.name,
        subtitle: v.number,
        imgSrc: '',
        description: `This is ${v.name} of ${v.releaseYear}. It's registration number is ${v.number}. Color is ${v.color}`
      }
    });
  }
}
