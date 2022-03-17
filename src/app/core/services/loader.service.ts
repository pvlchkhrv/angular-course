import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loadingAction$ = this.loadingSubject.asObservable();

  public showLoader(): void {
    this.loadingSubject.next(true);
  }

  public hideLoader(): void {
    this.loadingSubject.next(false);
  }
}
