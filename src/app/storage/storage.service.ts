import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  setItem(name, item) {
    localStorage.setItem(name, JSON.stringify(item));
  }

  getItem(name) {
    return localStorage.getItem(JSON.parse(localStorage.getItem(name)));
  }
}
