import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Observable, Subject} from 'rxjs';
import {ModalComponent} from '../components/modal/modal.component';
import {IModalData} from '../models/modal.interfaceData';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public userAnswerSubj = new Subject<boolean>();

  constructor(public modal: MatDialog) {
  }

  public get userAnswer(): Observable<boolean> {
    return this.userAnswerSubj.asObservable();
  }

  openModal(modalData: IModalData): Observable<boolean> {
    return this.modal
      .open(ModalComponent, {
        data: modalData,
        width: '400px',
      }).afterClosed();
  }
}
