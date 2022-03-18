import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IUser$} from '../../../core/models/user.interface';
import {PageEvent} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table-back',
  templateUrl: './table-back.component.html',
  styleUrls: ['./table-back.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TableBackComponent implements OnInit {
  @Input() public users: IUser$[];
  @Input() public totalSize: number;
  @Input() public pageSize: number;

  @Output() public pageEventEmitted = new EventEmitter<PageEvent>();
  @Output() public sortEventEmitted = new EventEmitter<Sort>();

  @ViewChild(MatSort) sort: MatSort;

  public dataSource: MatTableDataSource<IUser$>;
  public displayedColumns: string[] = ['name', 'email', 'age', 'address', 'department'];
  public pageSizeOptions: number[] = [5, 10, 15];

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.users);
  }

  public onPaginationChange(pageEvent: PageEvent): void {
    this.pageEventEmitted.emit(pageEvent);
  }

  public onSortChange(sort: Sort) {
    this.sortEventEmitted.emit(sort);
  }
}
