import {ILocation} from "./address.model";

export interface IUsersDataResponse {
  "results": [
    {
      "gender": string,
      "name": {
        "title": string,
        "first": string,
        "last": string
      },
      "location": ILocation,
      "email": string,
      "dob": {
        "date": string,
        "age": number
      },
      "id": {
        "name": string,
        "value": string
      },
      "picture": {
        "large": string,
        "medium": string,
        "thumbnail": string
      },
    }
  ],
  "info": {
    "seed": string,
    "results": number,
    "page": number,
    "version": string
  }
}
