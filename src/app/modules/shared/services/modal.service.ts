import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from "rxjs";
import {ModalComponent} from "../components/modal/modal.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public modal: MatDialog) { }

  // openDialog(modalData: IModal): Observable<boolean> {
  //   return this.modal
  //     .open(ModalComponent, {
  //     modalData,
  //     width: '400px',
  //     disableClose: true
  //   }).afterClosed();
  // }
}
