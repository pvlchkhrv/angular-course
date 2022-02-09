import {Injectable} from '@angular/core';
import {ICard} from '../models/card.model';
import {UsersService} from '../../users/services/users.service';
import {map, Observable} from 'rxjs';
import {IUser} from '../../users/models/user.model';
import {VehicleService} from '../../vehicles/services/vehicles.service';
import {IVehicle} from '../../vehicles/models/vehicle.model';

@Injectable({
  providedIn: 'root'
})

export class MapToCardsService {

  constructor(private userService: UsersService, private vehicleService: VehicleService) {
  }

  public mapUsersToCards(): Observable<ICard[]> {
    const users$ = this.userService.getUsers();
    return users$.pipe(map((users: IUser[]) => {
      return users.map((u: IUser) => {
        return {
          id: u.id,
          title: u.name,
          subtitle: u.company,
          imgSrc: u.imgSrc,
          description: `This is ${u.name} from ${u.company}. He is ${u.gender}.His department is ${u.department}.`
        }
      });
    }));
  }

  public mapVehiclesToCards(): Observable<ICard[]> {
    const vehicles$ = this.vehicleService.getVehicles();
    return vehicles$.pipe(map((vehicles: IVehicle[]) => {
      return vehicles.map((v: IVehicle) => {
        return {
          id: v.id,
          title: v.name,
          subtitle: v.number,
          imgSrc: v.imgSrc,
          description: `This is ${v.name} of ${v.releaseYear}. It's registration number is ${v.number}. Color is ${v.color}`
        }
      });
    }));
  }

}
