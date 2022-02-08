import {Injectable} from '@angular/core';
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
      id: 1,
      name: 'VW',
      color: 'grey',
      releaseYear: 2012,
      number: '0938-12',
      imgSrc: '../../assets/images/cars/img.jpg'
    },
    {
      id: 2,
      name: 'BMW',
      color: 'black',
      releaseYear: 2021,
      number: '0938-222',
      imgSrc: '../../assets/images/cars/img_1.jpg'
    },
    {
      id: 3,
      name: 'Audi',
      color: 'white',
      releaseYear: 2012,
      number: '1111-12',
      imgSrc: '../../assets/images/cars/img_2.jpg'
    }
  ]

  public getVehicles(): IVehicle []{
    return this.vehicles;
  }

  public getVehiclesMappedToCards(): ICard[]{
    return this.vehicles.map(v => {
      return {
        id: v.id,
        title: v.name,
        subtitle: v.number,
        imgSrc: v.imgSrc,
        description: `This is ${v.name} of ${v.releaseYear}. It's registration number is ${v.number}. Color is ${v.color}`
      }
    });
  }
}
