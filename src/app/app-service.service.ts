import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public isLoaderShown$ = this.loadingSubject.asObservable();

  constructor() {}

  showLoader() {
    this.loadingSubject.next(true);
  }

  hideLoader() {
    this.loadingSubject.next(false);
  }
}
