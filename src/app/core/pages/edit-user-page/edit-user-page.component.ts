import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ModalService} from "../../../modules/shared/services/modal.service";
import {IModalData} from "../../../modules/shared/models/modal.interfaceData";
import {EditUserShellComponent} from "../../../modules/users/containers/edit-user-shell/edit-user-shell.component";

@Component({
  selector: 'app-edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.scss']
})
export class EditUserPageComponent implements OnInit {
  @ViewChild(EditUserShellComponent) private child: EditUserShellComponent
  private modalData: IModalData = {
    title: 'Unsaved Changes Detected',
    message: 'You have unsaved changes',
    confirmMessage: 'OK, let me out',
    cancelMessage: 'No, stay here'
  }

  constructor(
    public modal: MatDialog,
    private modalService: ModalService
  ) {
  }

  ngOnInit(): void {
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.child.hasUnsavedData()) {
      this.modalService.openModal(this.modalData);
      return this.modalService.userAnswer;
    }
    return true
  }
}
