import {Injectable} from '@angular/core';
import {IVehicle} from '../models/vehicle.model';
import {Observable, of} from 'rxjs';

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
      imgSrc: '../../assets/images/cars/img_2.jpg'
    },
    {
      id: 3,
      name: 'Audi',
      color: 'white',
      releaseYear: 2012,
      number: '1111-12',
      imgSrc: '../../assets/images/cars/img_1.jpg'
    }
  ]

  public getVehicles(): Observable<IVehicle[]> {
    return of(this.vehicles);
  }

}
