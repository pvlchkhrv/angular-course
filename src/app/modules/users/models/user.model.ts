import {ILocation} from "./address.model";

export interface IUser {
  "gender": string;
  "name": {
    "title": string;
    "first": string;
    "last": string;
  },
  "location": ILocation;
  "email": string;
  "dob": {
    "date": string;
    "age": number;
  },
  "picture": {
    "large": string;
    "medium": string;
    "thumbnail": string;
  },
  "id": {
    "name": string;
    "value": string;
  },
}
