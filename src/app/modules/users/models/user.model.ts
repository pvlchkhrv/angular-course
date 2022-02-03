export interface IUser {
  firstName: string;
  lastName?: string
  age: number;
  company?: string;
  department?: string;
  sex?: string;
  activated: boolean;
  imgSrc?: string;
  file?: File
}
