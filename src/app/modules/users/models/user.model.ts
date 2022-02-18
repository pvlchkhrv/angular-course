import {IAddress} from "./address.model";

export interface IUser {
  id: number;
  firstName:  string;
  lastName: string;
  age: number;
  gender: string;
  department: string;
  company: string;
  imgSrc: string;
  email: string;
  addresses?: IAddress[];
}
