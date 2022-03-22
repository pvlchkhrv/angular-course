import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {IUser} from '../../../core/models/user.interface';
import {PageEvent} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';

@Component({
  selector: 'app-table-back',
  templateUrl: './table-back.component.html',
  styleUrls: ['./table-back.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TableBackComponent {
  @Input() public users: IUser[];
  @Input() public totalSize: number;
  @Input() public pageSize: number;

  @Output() public pageEventEmitted = new EventEmitter<PageEvent>();
  @Output() public sortEventEmitted = new EventEmitter<Sort>();

  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['name', 'email', 'age', 'address', 'department'];
  public pageSizeOptions: number[] = [5, 10, 15];

  public onPaginationChange(pageEvent: PageEvent): void {
    this.pageEventEmitted.emit(pageEvent);
  }

  public onSortChange(sort: Sort) {
    this.sortEventEmitted.emit(sort);
  }
}
