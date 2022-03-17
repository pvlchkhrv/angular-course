import { Injectable } from '@angular/core';
import {ModalComponent} from '../../shared/components/modal/modal.component';
import {MatDialog} from '@angular/material/dialog';
import {IModalData} from '../../shared/models/modal.interfaceData';

@Injectable({
  providedIn: 'root'
})
export class ExitEditUserGuardService {

  constructor(public modal: MatDialog) { }
  private modalData: IModalData = {
    title: 'Unsaved Changes Detected',
    message: 'You have unsaved changes',
    confirmMessage: 'OK, let me out',
    cancelMessage: 'No, stay here'
  }

  public openModal(): void {
    this.modal.open(ModalComponent, {
      data: this.modalData,
      width: '450px'
    }).afterClosed().subscribe(result => console.log(result));
  }
}
