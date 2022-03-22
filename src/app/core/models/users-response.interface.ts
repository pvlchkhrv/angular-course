import { IUser } from './user.interface';

export interface IUsersResponse {
  "results":IUser[],
  "info": {
    "seed": string,
    "results": number,
    "page": number,
    "version": number
  }
}
