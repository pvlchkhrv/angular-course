import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {IUser$} from '../../../core/models/user.interface';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() public users: IUser$[];
  @Input() public totalSize: number;
  @Input() public pageSize: number;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public dataSource: MatTableDataSource<IUser$>;
  public displayedColumns: string[] = ['name', 'email', 'age', 'address', 'department'];
  public pageSizeOptions: number[] = [5, 10, 15];
  public initialPageSize: number = 10;

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
  }

  public ngOnChanges(): void {
    if (this.users) {
      this.dataSource.data = this.users
    }
  }

  public ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator

    this.dataSource.sortingDataAccessor = this.changeSortingDataAccessor;
  }

  private changeSortingDataAccessor(item, property) {
    switch (property) {
      case 'age': return item.dob.age;
      case 'name': return item.name.last;
      default: return item[property];
    }
  }
}
