import {Injectable} from '@angular/core';
import {ICard} from '../../shared/models/card.model';
import {UsersService} from "../../users/services/users.service";
import {map, Observable} from "rxjs";
import {IUser} from "../../users/models/user.model";
import {VehicleService} from "./vehicles.service";

@Injectable({
  providedIn: 'root'
})

export class MapToCardsService {

  constructor(private userService: UsersService, private vehicleService: VehicleService) {
  }

  mapUsersToCards(): Observable<ICard[]> {
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

}
