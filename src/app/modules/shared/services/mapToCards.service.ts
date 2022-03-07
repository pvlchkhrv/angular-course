import {Injectable} from '@angular/core';
import {ICard} from '../models/card.model';
import {UsersService} from '../../users/services/users.service';
import {map, Observable} from 'rxjs';
import {IUser} from '../../users/models/user.model';
import {VehicleService} from '../../vehicles/services/vehicles.service';
import {IVehicle} from '../../vehicles/models/vehicle.model';
import {ILocation} from '../../users/models/address.model';

@Injectable({
  providedIn: 'root'
})

export class MapToCardsService {

  constructor() {
  }

  public mapUsersToCards(users: IUser[] | IUser): ICard[] {
    if (!Array.isArray(users)) {
      return [{
        id: 121221,
        title: 'u.name.first',
        subtitle: 'u.name.last',
        imgSrc: 'u.picture.large',
        description: `This is . He is .His age is .`
      }]
    }
    return users.map(u => {
      return {
        id: +u.id.value,
        title: u.name.first,
        subtitle: u.name.last,
        imgSrc: u.picture.large,
        description: `This is ${u.name.first} ${u.name.last}. He is ${u.gender}.His age is ${u.dob.age}.`
      }
    });
  }

  public mapVehiclesToCards(vehicles: IVehicle[]): ICard[] {
    return vehicles.map(v => {
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
