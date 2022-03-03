import {ILocation} from "./address.model";

export interface IUser {
  "gender": string,
  "name": {
    "title": string,
    "first": string,
    "last": string
  },
  "location": ILocation,
  "email": "brad.gibson@example.com",
  "dob": {
    "date": "1993-07-20T09:44:18.674Z",
    "age": 26
  },
  "picture": {
    "large": "https://randomuser.me/api/portraits/men/75.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
  },
  "id": {
    "name": "CPR",
    "value": "160982-7765"
  },
}
