import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {IModalData} from '../../models/modal.interfaceData';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IModalData,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
  }

  checkTheAnswer(answer: boolean): void {
    this.modalService.userAnswerSubj.next(answer);
  }

}
