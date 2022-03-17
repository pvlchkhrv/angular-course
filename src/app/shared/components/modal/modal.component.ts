import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {IModalData} from '../../models/modal.interfaceData';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IModalData,
    public modalRef: MatDialogRef<ModalComponent>
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.modalRef.close();
  }



}
