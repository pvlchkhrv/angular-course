import {Injectable} from '@angular/core';
import {ICard} from '../models/card.model';
import {IUser} from '../../users/models/user.model';
import {IVehicle} from '../../vehicles/models/vehicle.model';

@Injectable({
  providedIn: 'root'
})

export class MapToCardsService {

  constructor() {
  }

  public mapUsersToCards(users: IUser[]): ICard[] {
    return users.map(u => ({
        id: u.id,
        type: 'users',
        title: u.name.first,
        subtitle: u.name.last,
        imgSrc: u.picture.large,
        description: `This is ${u.name.first} ${u.name.last}. He is ${u.gender}. His age is ${u.dob.age}.`
    }));
  }

  public mapVehiclesToCards(vehicles: IVehicle[]): ICard[] {
    return vehicles.map(v => {
      return {
        id: v.id,
        type: 'vehicles',
        title: v.name,
        subtitle: v.number,
        imgSrc: v.imgSrc,
        description: `This is ${v.name} of ${v.releaseYear}. It's registration number is ${v.number}. Color is ${v.color}`
      }
    });
  }

}
