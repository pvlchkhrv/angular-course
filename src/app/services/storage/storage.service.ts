import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  public setItem(key, item): void {
    localStorage.setItem(key, JSON.stringify(item));
  }

  public getItem(key): any {
    return JSON.parse(localStorage.getItem(key));
  }
}
